import { Header } from '@components/Header';
import { Container, Content, Icon } from './styles';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton></Header>

      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        ></HighLight>

        <Button
          title="Criar"
          onPress={() => console.log("Criando turma")}
        ></Button>
      </Content>
    </Container>
  )
}