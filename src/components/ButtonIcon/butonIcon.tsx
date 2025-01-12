import { TouchableHighlightProps } from 'react-native';

import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableHighlightProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
  width?: number;
}

export function ButtonIcon({ icon, width = 32, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container { ...rest }>
      <Icon
        name={ icon }
        type={ type }
        width={ width }
      ></Icon>
    </Container>
  )
}