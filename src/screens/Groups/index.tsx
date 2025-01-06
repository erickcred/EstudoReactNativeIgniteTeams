import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty"
import { Button } from "@components/Button";

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([]);

  function salvaEmLocalStorage(nomeTurma: string) {
    console.log(groups.length)
  }

  function pageNewTurma() {
    console.log('Adicionar nova turma');
  }

  return (
    <Container>
      <Header></Header>
      <HighLight
        title="Turmas"
        subTitle="jogue com a sua turma"
      ></HighLight>

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            key={item}
            onPress={() => salvaEmLocalStorage(item)}
          ></GroupCard>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups?.length == 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma"></ListEmpty>
        )}
      />

      <Button
        title="Criar nova turma"
        onPress={() => pageNewTurma()}
      ></Button>
    </Container>
  );
}