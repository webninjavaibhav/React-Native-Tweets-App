import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";

export const accountStyle = StyleSheet.create({
  bodywrapper: {
    padding: 20,
    paddingVertical: 36,
    gap: 40,
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-around",
    backgroundColor: Colors.white,
  },
  emailLabel: {
    fontWeight: "500",
    fontSize: 16,
  },
});
