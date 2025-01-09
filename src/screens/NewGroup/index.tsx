import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      <Header onBack={handleBack} showBackButton></Header>

      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        ></HighLight>

        <Input
          placeholder="Nome da Turma"
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={() => console.log("Criando turma")}
        ></Button>
      </Content>
    </Container>
  )
}