import styled from "styled-components/native";
import { responsiveness } from "../../../utils/size-responsiveness";
import theme from "../../../theme";

export const Container = styled.View`
  width: 100%;
  gap: 20px;
  padding: ${responsiveness(2)}px;
  background-color: ${theme.colors.primary};


`