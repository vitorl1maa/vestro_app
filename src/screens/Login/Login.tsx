import { View, Text } from "react-native";
import React from "react";
import FormLogin from "./components/FormLogin";
import { TextDetail, Title } from "./styled";

const Login = () => {
  return (
    <View>
      <Title>
        Vestr<TextDetail>o</TextDetail>
      </Title>
      <FormLogin />
    </View>
  );
};

export default Login;
