import { FlatList } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { GroupCard } from "@components/GroupCard";
import { Title } from '../../components/Filter/styles';

export function Players() {
  const [ players, setPlayers ] = useState<string[]>([  ]);
  const [ player, setPlayer ] = useState<string>('');
  const [ team, setTeam ] = useState<string>('time a');

  function addPlayer() {
    console.log(player);
    setPlayers(prevState => [ ...prevState, player ]);
    setPlayer('');
  }

  return (
    <Container>
      <Header showBackButton></Header>
      <HighLight title="Nome da turma" subTitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={ false }
          onChangeText={setPlayer}
          value={player}
        />

        <ButtonIcon onPress={() => addPlayer()} icon="add" />
      </Form>

      <HeaderList>
        <FlatList 
          data={ [ 'time a', 'time b'] }
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

      <FlatList 
        data={ players }
        keyExtractor={ item => item }
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        showsVerticalScrollIndicator={ false }
      />

      
    </Container>
  )
}