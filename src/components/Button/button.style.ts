import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";

export const buttonStyle = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: 10,
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 12,
    borderColor: Colors.BlueGrey,
  },
  textCenter: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
