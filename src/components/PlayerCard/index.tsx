import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styes";

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
      <Container>
        <Icon name="person" />
        <Name>{ name }</Name>
        <ButtonIcon
          icon="close"
          width={ 24 }
          type="SECONDARY"
          onPress={ onRemove }
        />
      </Container>
    )
}