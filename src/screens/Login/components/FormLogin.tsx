import theme from "../../../theme";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { AtSign, Eye, EyeOff } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import googleIcon from "../../../images/icons/flat-color-icons--google.png";
import facebookIcon from "../../../images/icons/logos--facebook.png";
import {
  Container,
  DetailsForm,
  FacebookIcon,
  ForgotPassword,
  GoogleIcon,
  LineDetail,
  LoginButtonsContainer,
  TextDetail,
  TextRegister,
} from "./styled";

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

      <View>
        <Input
          onPress={() => setShowPassword(!showPassword)}
          icon={showPassword ? EyeOff : Eye}
          placeholder="password"
          autoCapitalize="none"
          cursorColor={theme.colors.pistache}
          returnKeyType="send"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity>
          <ForgotPassword>Forgot password</ForgotPassword>
        </TouchableOpacity>
      </View>

      <Button text="Login" />

      <DetailsForm>
        <LineDetail />
        <TextDetail>or</TextDetail>
        <LineDetail />
      </DetailsForm>

      <LoginButtonsContainer>
        <View>
          <TouchableOpacity>
            <GoogleIcon source={googleIcon} resizeMode="contain" />
            <Button
              width="35%"
              text=""
              color={theme.colors.gray}
              textColor={theme.colors.secondary}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <FacebookIcon source={facebookIcon} resizeMode="contain" />
            <Button
              width="35%"
              text=""
              color={theme.colors.gray}
              textColor={theme.colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </LoginButtonsContainer>

      <View>
        <TouchableOpacity>
          <TextRegister>
            Don’t I have an account ?{" "}
            <Text style={{ color: theme.colors.pistache }}>Register</Text>
          </TextRegister>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default FormLogin;
