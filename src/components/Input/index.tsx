import React, { ComponentProps } from "react";
import { Text, TextInput, TextStyle, View } from "react-native";
import { inputStyle } from "./input.style";

function Input({
  style,
  label,
  error,
  ...props
}: ComponentProps<typeof TextInput> & { label?: string; error?: string }) {
  return (
    <View style={inputStyle.wrapper}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={{
          ...((style as TextStyle) ?? {}),
          ...inputStyle.input,
        }}
        {...props}
      />
      {error && <Text style={inputStyle.error}>{error}</Text>}
    </View>
  );
}

export default Input;
