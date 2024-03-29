import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";

export const avatarStyle = StyleSheet.create({
  wrapper: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.BlueGrey,
    justifyContent: "center",
    alignItems: "center",
  },
});
