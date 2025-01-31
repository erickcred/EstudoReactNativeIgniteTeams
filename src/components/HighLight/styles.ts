import styled from 'styled-components/native';
import theme from '@theme/theme';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title =  styled.Text`
  text-align: center;
  font-size: ${ theme.FONT_SIZE.XL }px;
  font-family: ${ theme.FONT_FAMILY.ROBOTO_BOLD };
  color: ${ theme.COLORS.WHITE }
`;

export const SubTitle =  styled.Text`
  text-align: center;
  font-size: ${ theme.FONT_SIZE.MD }px;
  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
  color: ${ theme.COLORS.GRAY_300 }
`;