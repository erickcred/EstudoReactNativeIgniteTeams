import theme from "@theme/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.COLORS.GRAY_600 }
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.GREEN_700,
  size: 100
}))``;