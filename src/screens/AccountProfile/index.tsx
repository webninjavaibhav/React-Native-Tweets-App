import { View, Text } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import Button from "../../components/Button";
import { accountStyle } from "./profile.style";
import { ACCOUNT_PROFILE_CONTENT } from "./accountProfile.contant";

export default function AccoutProfile() {
  const { user, logout } = useAuth();

  return (
    <View style={accountStyle.bodywrapper}>
      <Text>
        <Text style={accountStyle.emailLabel}>
          {ACCOUNT_PROFILE_CONTENT.emailLabel}
        </Text>{" "}
        <Text>{user && user.email}</Text>{" "}
      </Text>

      <Button onPress={logout}>
        <Text>{ACCOUNT_PROFILE_CONTENT.logoutTxt}</Text>
      </Button>
    </View>
  );
}
