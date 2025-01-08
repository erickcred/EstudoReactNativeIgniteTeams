import { FlatList } from "react-native";
import { useState } from "react";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [ team, setTeam ] = useState<string>('time a');
  // const [ players, setPlayers ] = useState<string[]>([ 'Arthur', 'João', 'Maria', 'Gabriel', 'Maily', 'Ashley', 'Kimberly', 'Pedro', 'Jederson', 'Maria Fernanda' ]);
  const [ players, setPlayers ] = useState<string[]>([ ]);
  const [ player, setPlayer ] = useState<string>('');

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
          <PlayerCard name={ item } onRemove={() => console.log(item)} />
        )}
        showsVerticalScrollIndicator={ false }
        contentContainerStyle={[
          // { paddingBottom: 100 },
          players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
        ]}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time"
          />
        )}
      />

      <Button 
        title="Remover turma"
        type="SECONDARY"
      />
    </Container>
  )
}