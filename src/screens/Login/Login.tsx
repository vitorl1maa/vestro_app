import { View, Text } from "react-native";
import React from "react";
import FormLogin from "./components/FormLogin";
import { Container, TextDetail, Title } from "./styled";

const Login = () => {
  return (
    <Container>
      <Title>
        Vestr<TextDetail>o</TextDetail>
      </Title>
      <FormLogin />
    </Container>
  );
};

export default Login;
