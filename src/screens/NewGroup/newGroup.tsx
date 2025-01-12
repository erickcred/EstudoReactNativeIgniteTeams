import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header/header';
import { Container, Content, Icon } from './styles';
import { HighLight } from '@components/HighLight/highLight';
import { Button } from '@components/Button/button';
import { Input } from '@components/Input/input';
import { Alert } from 'react-native';
import { groupCreate } from '@storage/group/groupsCreate';
import { AppError } from '../../utils/AppError';

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
      
      await groupCreate(group.trim());
      navigation.navigate('players', { group: group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
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