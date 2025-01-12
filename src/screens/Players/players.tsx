import { useCallback, useState, useRef, useEffect } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header/header";
import { HighLight } from "@components/HighLight/highLight";
import { ButtonIcon } from "@components/ButtonIcon/butonIcon";
import { Input } from "@components/Input/input";
import { Filter } from "@components/Filter/filter";
import { PlayerCard } from "@components/PlayerCard/playerCard";
import { ListEmpty } from "@components/ListEmpty/listEmpty";
import { Button } from "@components/Button/button";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayStorageDTO";
import { AppError } from "@utils/AppError";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";
import { groupRemove } from "@storage/group/groupRemove";
import { Loading } from "@components/Loading/loading";

type RouteParams = {
  group: string;
}

export function Players() {
  const navigation = useNavigation();

  const [ isLoding, setIsLoding ] = useState<boolean>(true);
  const [ team, setTeam ] = useState<string>('Time a');
  const [ newPlayerName, setNewPlayerName ] = useState<string>('');
  const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute();
  
  const { group } = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput>(null);
  
  function handleGoBack() {
    navigation.navigate('groups');
  }

  async function handleAddPlayer() {
    setIsLoding(true);
    if (newPlayerName.trim().toLowerCase().length === 0) {
      return Alert.alert('Novo jogador', 'Informe o nome do jogador.');
    }
    
    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName.trim(),
      team: team
    }
    try {
      await playerAddByGroup(newPlayer, group);
      await fetchPlayersByTeam();
      setNewPlayerName('');
      newPlayerNameInputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo jogador', error.message);
      } else {
        Alert.alert('Novo jogador', 'Não foi possível adicionar o jogador.');
        console.log(error);
      }
    }
  }

  async function handleRemovePlayer(player: PlayerStorageDTO) {
    try {
      Alert.alert('Novo jogador', 'Deseja remover esse jogador do time?', [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => playerRemoveByGroup(player, group)
        }
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Novo jogador', 'Não foi possível remover o jogador.');
    }
  }

  async function handleRemoveGroup() {
    try {
      Alert.alert('Remover turma', `Deseja realmente remover a turma ${group}!`, [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => {
            groupRemove(group);
            navigation.navigate('groups');
          }
        }
      ])
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Remover turma', error.message);
      } else {
        Alert.alert('Remover turma', 'Não foi possível remover a turma.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const data = await playersGetByGroupAndTeam(group, team);
      
      setPlayers(data);
    } catch (error) {
      Alert.alert('Novo jogador', 'Não foi possível carregar os jogadores do time selecionado!');
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  }

  useEffect(useCallback(() => {
    fetchPlayersByTeam();
    }, [ team, handleRemovePlayer ])
  );

  return (
    <Container>
      <Header 
        showBackButton
        onBack={handleGoBack}
      ></Header>
      <HighLight
        title={ group }
        subTitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          inputRef={ newPlayerNameInputRef }
          autoCorrect={ false }
          onSubmitEditing={ handleAddPlayer }
          returnKeyType="done"
          onChangeText={ (name) => setNewPlayerName(name)}
          value={ newPlayerName }
        />

        <ButtonIcon onPress={() => handleAddPlayer()} icon="add" />
      </Form>

      <HeaderList>
        <FlatList 
          data={ [ 'Time a', 'Time b' ] }
          keyExtractor={ item => item }
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={ item === team }
              onPress={ () => setTeam(item) }
            />
          )}
          showsHorizontalScrollIndicator={ false }
          horizontal
        />
        <NumberOfPlayers>{ players.length }</NumberOfPlayers>
      </HeaderList>

      {
        isLoding ? <Loading /> :
        <FlatList
          data={ players }
          keyExtractor={ item => item.name+item.team }
          renderItem={({ item }) => (
            <PlayerCard name={ item.name } onRemove={() => handleRemovePlayer(item)} />
          )}
          showsVerticalScrollIndicator={ false }
          contentContainerStyle={[
            // { paddingBottom: 100 },
            players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
          ]}
          ListEmptyComponent={() => (
            <ListEmpty
              message={ `Não há pessoas nesse time ${team.toUpperCase()}` } 
            />
          )}
        />
      }

      <Button 
        title="Remover turma"
        type="SECONDARY"
        onPress={ handleRemoveGroup }
      />
    </Container>
  )
}