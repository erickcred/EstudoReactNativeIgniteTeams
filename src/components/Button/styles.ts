import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import theme from '@theme/theme';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Conrainer = styled(TouchableOpacity)<Props>`
  flex: 1;
  
  min-height: 56px;
  max-height: 56px;
  
  justify-content: center;
  border-radius: 6px;

  background-color: ${({ type }: Props) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK 
  };
`;

export const Title = styled.Text`
  color: ${ theme.COLORS.WHITE };
  font-size: ${ theme.FONT_SIZE.MD }px;
  font-family: ${ theme.FONT_FAMILY.ROBOTO_BOLD };
  text-align: center;
`;