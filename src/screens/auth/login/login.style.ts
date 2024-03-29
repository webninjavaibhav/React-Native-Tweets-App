import { StyleSheet } from "react-native";
import { Colors } from "../../../Theme/colors";

export const loginScreenStyle = StyleSheet.create({
  screenWrapper: {
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  error: {
    color: Colors.red,
  },
  heading: {
    fontSize: 24,
    marginBottom: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputWrapper: {
    gap: 20,
    marginBottom: 40,
    width: "100%",
  },
  signUpText: {
    marginTop: 24,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
