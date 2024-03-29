import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";

export const inputStyle = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: 10,
    width: "100%",
  },
  input: {
    width: "100%",
    borderWidth: 0,
    padding: 10,
    borderBottomColor: Colors.BlueGrey,
    borderBottomWidth: 1,
  },
  error: {
    color: Colors.red,
    fontSize: 10,
  },
});
