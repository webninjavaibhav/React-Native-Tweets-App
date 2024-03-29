import { Stack } from "expo-router";
import { AuthProvider } from "../src/context/AuthProvider";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeAreaView>
    </AuthProvider>
  );
}
