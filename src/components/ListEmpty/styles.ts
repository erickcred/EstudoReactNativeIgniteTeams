import styled from 'styled-components/native';
import theme from '@theme/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${ theme.FONT_SIZE.SM }px;
  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
  color: ${ theme.COLORS.GRAY_300 };
`;