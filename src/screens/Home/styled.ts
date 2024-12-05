import styled from "styled-components/native";
import theme from "../../theme";
import { responsiveness } from "@utils/styles/size-responsiveness";

export const Container = styled.View`
  min-width: 100%;
  flex: 1;
  background: ${theme.colors.primary};
  padding: ${responsiveness(2.5)}px;

`