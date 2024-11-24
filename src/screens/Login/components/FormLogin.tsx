import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Container } from "./styled";
import { AtSign, Eye, EyeOff } from "lucide-react-native";
import theme from "../../../theme";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Input
        icon={AtSign}
        placeholder="e-mail"
        autoCapitalize="none"
        cursorColor={theme.colors.pistache}
        keyboardType="email-address"
      />
      <Input
        onPress={() => setShowPassword(!showPassword)}
        icon={showPassword ? EyeOff : Eye}
        placeholder="password"
        autoCapitalize="none"
        cursorColor={theme.colors.pistache}
        returnKeyType="send"
        secureTextEntry={!showPassword}
      />
      <Button text="Login" />
    </Container>
  );
};

export default FormLogin;
