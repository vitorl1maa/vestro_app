import React from "react";
import { View } from "react-native";
import { ButtonField, TextButton } from "./styled";
import { ButtonPropsDefault } from "./types";

const Button = ({ text, width }: ButtonPropsDefault) => {
  return (
    <View>
      <ButtonField width={width}>
        <TextButton>{text}</TextButton>
      </ButtonField>
    </View>
  );
};

export default Button;
