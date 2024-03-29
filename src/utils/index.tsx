import { Dimensions } from "react-native";

export const PlatfromWidth = Dimensions.get("window").width;
export const PlatfromHeight = Dimensions.get("window").height;

export const isValidEmail = (value: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

export function secondsToAmPmTime(_seconds: number) {
  // Create a new Date object from the seconds.
  const date = new Date(_seconds * 1000);

  // Get the hours, minutes, and seconds.
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  // Convert the hours to AM/PM format.
  const amPm = hours >= 12 ? "pm" : "am";

  // Return the time string in AM/PM format.
  return `${hours % 12}:${
    minutes.toString().length <= 1 ? "0" + minutes : minutes
  } ${amPm}`;
}
