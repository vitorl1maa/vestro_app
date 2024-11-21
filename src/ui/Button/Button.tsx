import React from "react";
import { View } from "react-native";
import { ButtonDefault, TextButton } from "./styled";
import { ButtonPropsDefault } from "./types";

const Button: React.FC<ButtonPropsDefault> = ({ text, width }) => {
  return (
    <View>
      <ButtonDefault width={width}>
        <TextButton>{text}</TextButton>
      </ButtonDefault>
    </View>
  );
};

export default Button;
