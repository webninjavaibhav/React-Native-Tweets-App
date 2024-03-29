import { View, Text } from "react-native";
import Input from "../../../components/Input";
import { signUpScreenStyle } from "./signup.style";
import Button from "../../../components/Button";
import { Link } from "expo-router";
import useSignup from "./useSignUp";
import { SIGNUP_CONTENT } from "./signup.contant";

export default function SignUp() {
  const { errors, formError, isLoading, onFieldChange, onSignup } = useSignup();

  return (
    <View style={signUpScreenStyle.screenWrapper}>
      <Text style={signUpScreenStyle.heading}>{SIGNUP_CONTENT.title}</Text>
      <View style={signUpScreenStyle.inputWrapper}>
        <Input
          error={errors.errors.email}
          keyboardType="email-address"
          onChangeText={(text) => onFieldChange("email", text)}
          label={SIGNUP_CONTENT.emailTxt}
        />
        <Input
          error={errors.errors.password}
          keyboardType="visible-password"
          onChangeText={(text) => onFieldChange("password", text)}
          label={SIGNUP_CONTENT.passwordTxt}
        />
        <Input
          error={errors.errors.confirmPassword}
          keyboardType="visible-password"
          onChangeText={(text) => onFieldChange("confirmPassword", text)}
          label={SIGNUP_CONTENT.confirmPasswordTxt}
        />
      </View>
      <Button isLoading={isLoading} onPress={onSignup}>
        <Text>{SIGNUP_CONTENT.title}</Text>
      </Button>
      <View style={signUpScreenStyle.signUpText}>
        <Text>
          Already have account?{" "}
          <Link href={"login"}>
            <Text style={signUpScreenStyle.underline}>
              {SIGNUP_CONTENT.loginTxt}
            </Text>
          </Link>
        </Text>
      </View>
      {formError && <Text style={signUpScreenStyle.error}>{formError}</Text>}
    </View>
  );
}
