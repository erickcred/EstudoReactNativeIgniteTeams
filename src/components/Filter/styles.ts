import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import theme from '@theme/index';

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  border: 1px solid ${({ isActive }: FilterStyleProps) => 
    isActive ? theme.COLORS.GREEN_700 : 'transparent'
  };
  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 75px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${ theme.FONT_FAMILY.ROBOTO_BOLD };
  font-size: ${ theme.FONT_SIZE.SM }px;
  color: ${ theme.COLORS.WHITE };
  text-transform: uppercase;
`;