import { View, Text } from "react-native";
import React from "react";
import { avatarStyle } from "./avatar.style";

export default function Avatar({ username }: { username: string }) {
  return (
    <View style={avatarStyle.wrapper}>
      <Text>{username.split("")[0]}</Text>
    </View>
  );
}
