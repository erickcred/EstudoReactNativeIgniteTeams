import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Alert } from 'react-native';
import { groupCreate } from '@storage/Group/groupsCreate';

export function NewGroup() {
  const navigation = useNavigation();
  const [ group, setGroup ] = useState<string>('');

  function handleGoBack() {
    navigation.navigate('groups');
  }

  async function handleGoPlayers(group: string) {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }
      await groupCreate(group);
      // navigation.navigate('players', { group: group })
    } catch (error) {
      Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      console.log(error);
    }
  }

  return (
    <Container>
      <Header onBack={handleGoBack} showBackButton></Header>

      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        ></HighLight>

        <Input
          placeholder="Nome da Turma"
          onChangeText={ setGroup }
          value={ group }
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={() => handleGoPlayers(group) }
        ></Button>
      </Content>
    </Container>
  )
}