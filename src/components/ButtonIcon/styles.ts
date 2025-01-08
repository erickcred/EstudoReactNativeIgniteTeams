import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '@theme/index';

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconStyleProps;
  width: number;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;
  
  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ type, width } : Props) => ({
  size: width,
  weigth: '',
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;