import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Header } from "@components/Header/header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight/highLight";
import { GroupCard } from "@components/GroupCard/groupCard";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty/listEmpty"
import { Button } from "@components/Button/button";
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { groupRemove } from '@storage/group/groupRemove';


export function Groups() {
  const navigation = useNavigation();
  const [ groups, setGroups ] = useState<string[]>([]);
  
  function handleOpenNewGroup() {
    navigation.navigate('newGroup');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group: group });
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
            onPress={() => handleOpenGroup(item) }
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
        onPress={handleOpenNewGroup}
      ></Button>
    </Container>
  );
}