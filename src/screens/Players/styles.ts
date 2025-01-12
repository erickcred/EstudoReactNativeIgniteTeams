import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import theme  from '@theme/theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${ theme.COLORS.GRAY_600 };
  padding: 10px 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${ theme.COLORS.GRAY_700 };
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  color: ${ theme.COLORS.GRAY_200 };
  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
  font-size: ${ theme.FONT_SIZE.SM }px;
`;
