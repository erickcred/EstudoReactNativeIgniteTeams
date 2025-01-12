import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';
import theme from '@theme/index';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${ theme.COLORS.GRAY_500 };
  border-radius: 6px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 24px 8px 24px 24px;
  margin-bottom: 12px;
`;

export const ContentCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${ theme.FONT_SIZE.MD }px;
  color: ${ theme.COLORS.GRAY_200 };
  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
`;

export const UsersIcon = styled(UsersThree).attrs(() => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: 'fill'
}))`
  margin-right: 20px;
`;
