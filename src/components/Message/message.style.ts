import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/colors";
import { PlatfromWidth } from "../../utils";

export const messageStyle = StyleSheet.create({
  messageWrapper: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BlueGrey + "33",
    flexDirection: "column",
  },
  topBrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  midContentWrapper: {
    flex: 1,
  },
  nameTimeTextWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
  },
  nametext: {
    fontSize: 18,
    fontWeight: "500",
  },
  timeText: {
    fontSize: 12,
    color: Colors.black3,
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
    paddingVertical: 0,
    marginTop: 4,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
  },

  bottomWrapper: {
    maxWidth: PlatfromWidth - 140,
    flexDirection: "row",
  },
});
