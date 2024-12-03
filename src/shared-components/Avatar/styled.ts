import theme from "@theme/index";
import styled from "styled-components/native";

export const AvatarImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;

`;

export const AvatarBackup = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: ${theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;


`;