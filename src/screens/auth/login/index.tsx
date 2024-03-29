import { View, Text } from "react-native";
import Input from "../../../components/Input";
import { loginScreenStyle } from "./login.style";
import Button from "../../../components/Button";
import { Link } from "expo-router";
import useLogin from "./useLogin";
import { LOGIN_CONTENT } from "./login.constant";

export default function Login() {
  const { errors, formError, isLoading, onFieldChange, onLogin } = useLogin();

  return (
    <View style={loginScreenStyle.screenWrapper}>
      <Text style={loginScreenStyle.heading}>{LOGIN_CONTENT.title}</Text>
      <View style={loginScreenStyle.inputWrapper}>
        <Input
          keyboardType="email-address"
          onChangeText={(text) => onFieldChange("email", text)}
          error={errors.errors.email}
          label={LOGIN_CONTENT.emailTxt}
        />
        <Input
          keyboardType="visible-password"
          onChangeText={(text) => onFieldChange("password", text)}
          error={errors.errors.password}
          label={LOGIN_CONTENT.passwordTxt}
        />
      </View>
      <Button isLoading={isLoading} onPress={onLogin}>
        <Text>{LOGIN_CONTENT.title}</Text>
      </Button>
      <View style={loginScreenStyle.signUpText}>
        <Text>
          Don't have account?{" "}
          <Link href={"signup"}>
            <Text style={loginScreenStyle.underline}>
              {LOGIN_CONTENT.signUpTxt}
            </Text>
          </Link>
        </Text>
      </View>
      {formError && <Text style={loginScreenStyle.error}>{formError}</Text>}
    </View>
  );
}
