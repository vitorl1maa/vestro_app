import { View, Text } from "react-native";
import React from "react";
import { ButtonDefault, TextButton } from "./styled";

const Button = () => {
  return (
    <View>
      <ButtonDefault>
        <TextButton>Clique aqui</TextButton>
      </ButtonDefault>
    </View>
  );
};

export default Button;
