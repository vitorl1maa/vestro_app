import theme from "@theme/index";
import React, { useState } from "react";
import { AtSign, Eye, EyeOff } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import googleIcon from "@assets/icons/flat-color-icons--google.png";
import facebookIcon from "@assets/icons/logos--facebook.png";
import {
  BunttonSocialMedia,
  Container,
  DetailsForm,
  FacebookIcon,
  ForgotPassword,
  GoogleIcon,
  LineDetail,
  LoginButtonsContainer,
  TextButtonLogin,
  TextDetail,
  TextRegister,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../../@types/routes";

import Button from "@shared-components/Button/Button";
import Input from "@shared-components/Input/Input";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    navigation.replace("Home");
  };

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

      <Button onPress={handleLogin} text="Login" />

      <DetailsForm>
        <LineDetail />
        <TextDetail>or</TextDetail>
        <LineDetail />
      </DetailsForm>

      <LoginButtonsContainer>
        <View>
          <BunttonSocialMedia>
            <GoogleIcon source={googleIcon} resizeMode="contain" />
            <TextButtonLogin>Continue with Google</TextButtonLogin>
          </BunttonSocialMedia>
        </View>

        <View>
          <View>
            <BunttonSocialMedia>
              <FacebookIcon source={facebookIcon} resizeMode="contain" />
              <TextButtonLogin>Continue with Facebook</TextButtonLogin>
            </BunttonSocialMedia>
          </View>
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
