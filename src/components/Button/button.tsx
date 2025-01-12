import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Conrainer, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Conrainer type={type} { ...rest }>
      <Title>{ title }</Title>
    </Conrainer>
  )
}