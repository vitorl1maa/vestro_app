import styled from "styled-components/native";
import { responsiveness } from "../../../utils/size-responsiveness";
import theme from "../../../theme";

export const Container = styled.View`
  max-width: 100%;
  gap: 20px;
  padding: ${responsiveness(2)}px;
  background-color: ${theme.colors.primary};
  
`;

export const ForgotPassword = styled.Text`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.semiBold};
  margin-top: 10px;
`;

export const DetailsForm = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  position: relative;
  margin: 20px 0;
`;

export const LineDetail = styled.View`
  width: 150px;
  height: 1px;
  background-color: ${theme.colors.secondary};
`;

export const TextDetail = styled.Text`
  color: ${theme.colors.secondary};
  position: absolute;
  top: -10px;
  left: 175px;
  
`;

export const LoginButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  position: relative;

`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.gray};

`;

export const GoogleIcon = styled.Image`
  width: 100%;
  height: ${responsiveness(3)}px;
  position: absolute;
  top: 5px;
  z-index: 10;
`;

export const FacebookIcon = styled.Image`
  width: 100%;
  height: ${responsiveness(3)}px;
  position: absolute;
  top: 5px;
  z-index: 10;
`;

export const TextRegister = styled.Text`
  text-align: center;
  margin-top: 30%;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.semiBold};
`;
