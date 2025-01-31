import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '@theme/theme';

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY' | 'WORNING' | 'DANGER' ;

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

export const Icon = styled(MaterialIcons).attrs(({ width }: Props) => ({
  size: width,
}))<Props>`
    color: ${({ type = 'PRIMARY' }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_700;
      case 'SECONDARY':
        return theme.COLORS.FLAT_UI_BELIZEHOLE;
      case 'WORNING':
        return theme.COLORS.FLAT_UI_PUMPKIN;
      case 'DANGER':
        return theme.COLORS.RED;
      default:
        return theme.COLORS.FLAT_UI_BELIZEHOLE;
    }
  }}
`;