import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FormLogin from "./components/FormLogin";
import { Container, TextDetail, Title } from "./styled";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <Container>
      <SafeAreaView>
        <StatusBar style="inverted" translucent />
        <Title>
          Vestr<TextDetail>o</TextDetail>
        </Title>
        <FormLogin />
      </SafeAreaView>
    </Container>
  );
};

export default Login;
