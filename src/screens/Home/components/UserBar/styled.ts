import theme from "@theme/index";
import { fontSize } from "@utils/styles/font-size-responsiveness";
import styled from "styled-components/native";

export const UserDetails = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const UserInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const UserTitle = styled.Text`
  font-family: ${theme.fonts.extraBold};
  font-size: ${fontSize(0.9)}px;
  color: ${theme.colors.secondary};

`;

export const UserName = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: ${fontSize(1.7)}px;
  color: ${theme.colors.pistache};
`;