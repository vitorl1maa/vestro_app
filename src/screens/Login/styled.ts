import styled from "styled-components/native";
import { responsiveness } from "../../utils/size-responsiveness";
import theme from "../../ui/theme";

export const Container = styled.View`
  padding: ${responsiveness(2)}px;
  background-color: ${theme.colors.primary};


`