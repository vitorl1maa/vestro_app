import styled from "styled-components/native";
import theme from "../../theme";
import { fontSize } from "../../utils/font-size-responsiveness";

export const Title = styled.Text`
  color: ${theme.colors.secondary};
  font-size: ${fontSize(4)};
  text-align: center;
  font-family: ${theme.fonts.semiBold};
  margin-bottom: 20px;

`

export const TextDetail = styled.Text`
  color: ${theme.colors.pistache};

`