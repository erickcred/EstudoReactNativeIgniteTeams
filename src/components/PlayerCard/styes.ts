import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '@theme/index';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${ theme.COLORS.GRAY_500 };
  border-radius: 6px;
  
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

`;

export const Name = styled.Text`
  flex: 1;

  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
  font-size: ${ theme.FONT_SIZE.MD }px;
  color: ${ theme.COLORS.GRAY_200 };
`;

export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`
  margin: 0 4px 0 16px;
`;