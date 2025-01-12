import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
  onBack?: () => void;
}

export function Header({ showBackButton = false, onBack }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={onBack}>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg} />
    </Container>
  )
}