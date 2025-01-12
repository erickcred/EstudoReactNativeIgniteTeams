import styled from 'styled-components/native';
import { TextInput } from 'react-native';

import theme from '@theme/theme';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${ theme.COLORS.GRAY_700 };
  border-radius: 6px;
  padding: 16px;

  color: ${ theme.COLORS.WHITE };
  font-family: ${ theme.FONT_FAMILY.ROBOTO_REGULAR };
  font-size: ${ theme.FONT_SIZE.MD }px;
`;