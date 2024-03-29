import { PlatfromWidth } from "./../../utils/index";
import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";

export const homeStyle = StyleSheet.create({
  bodyWrapper: {
    paddingTop: 36,
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 26,
    borderTopColor: Colors.BlueGrey + "33",
    borderTopWidth: 1,
    flex: 1,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 16,
    textDecorationLine: "underline",
  },
  textCenter: {
    paddingVertical: 200,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  inputWrapper: {
    borderTopColor: Colors.BlueGrey + "33",
    paddingVertical: 8,
    borderTopWidth: 1,
    minHeight: 58,
    gap: 8,
    width: PlatfromWidth,
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 8,
    width: PlatfromWidth - 140,
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexGrow: 1,
  },

  inputButtonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  inputButtons: {
    borderColor: Colors.BlueGrey,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 4,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  inputButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomWrapper: {
    maxWidth: PlatfromWidth - 140,
    flexDirection: "row",
  },
});
