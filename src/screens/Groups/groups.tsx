import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard/groupCard";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty"
import { Button } from "@components/Button";
import { groupsGetAll } from '@storage/Group/groupsGetAll';
import { groupRemove } from '@storage/Group/groupRemove';


export function Groups() {
  const navigation = useNavigation();
  const [ groups, setGroups ] = useState<string[]>([]);

  function handleGoGroup(nomeTurma: string) {
    console.log(nomeTurma)
    navigation.navigate('players', { group: nomeTurma });
  }

  function handleNewGroup() {
    console.log('Adicionar nova turma');
    navigation.navigate('newGroup');
  }

  async function handleRemoveGroup(nomeTurma: string) {
    Alert.alert('Groups', `Remover a turma - ${ nomeTurma }?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => groupRemove(nomeTurma)
      }
    ]);
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, [fetchGroups]));

  return (
    <Container>
      <Header></Header>
      <HighLight
        title="Turmas"
        subTitle="jogue com a sua turma"
      ></HighLight>

      <FlatList
        data={ groups }
        keyExtractor={ item => item }
        renderItem={({ item }) => (
          <GroupCard
            title={ item }
            key={ item }
            onPress={() => handleGoGroup(item) }
            showButtonIcon={true}
            buttonIcon="remove"
            typeButtonIcon="WORNING"
            onButtonEvent={ () => handleRemoveGroup(item) }
          ></GroupCard>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups?.length == 0 ? { flex: 1 } : { paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma"></ListEmpty>
        )}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      ></Button>
    </Container>
  );
}