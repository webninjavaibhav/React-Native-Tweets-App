import React, { ComponentProps } from "react";
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";

import { buttonStyle } from "./button.style";
import { Colors } from "../../Theme/colors";

function Button({
  style,
  isLoading,
  children,
  ...props
}: ComponentProps<typeof TouchableOpacity> & {
  isLoading?: boolean;
}) {
  return (
    <TouchableOpacity
      style={{
        ...buttonStyle.wrapper,
        ...((style as TextStyle) || {}),
      }}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            ...buttonStyle.textCenter,
            color: Colors.black + props.disabled ? "33" : "",
          }}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
