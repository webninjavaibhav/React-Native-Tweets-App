import { View, Text } from "react-native";
import React from "react";
import { splashScreenStyle } from "./splashScreen.style";
import { SPLASH_SCREEN_CONTENT } from "./splashScreen.constant";

export default function SplashScreen() {
  return (
    <View style={splashScreenStyle.body}>
      <Text style={splashScreenStyle.appName}>
        {SPLASH_SCREEN_CONTENT.title}
      </Text>
    </View>
  );
}
