import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Avatar from "../Avatar";
import { messageStyle } from "./message.style";
import Input from "../Input";
import { PlatfromWidth, secondsToAmPmTime } from "../../utils";
import { TtweetApi } from "../../data.type";

export default function Message({
  createdAt,
  id,
  updatedAt,
  tweet,
  username,
  isEditable,
  isEditing,
  onChangeTweet,
  onEditCancel,
  onEdit,
}: TtweetApi & {
  isEditing?: boolean;
  isEditable?: boolean;
  onChangeTweet: (_newTweet: string) => void;
  onEdit: (_value: TtweetApi) => void;
  onEditCancel: () => void;
}) {
  const [inputText, setInputText] = useState<string>(tweet);
  return (
    <View style={messageStyle.messageWrapper}>
      <View style={messageStyle.topBrapper}>
        <View>
          <Avatar username={username} />
        </View>
        <View style={messageStyle.midContentWrapper}>
          <View>
            <View style={messageStyle.nameTimeTextWrapper}>
              <Text style={messageStyle.nametext}>
                {username.split("@")[0]}
              </Text>
              <Text style={messageStyle.timeText}>
                {updatedAt?.seconds
                  ? secondsToAmPmTime(updatedAt?.seconds ?? 1)
                  : secondsToAmPmTime(createdAt?.seconds ?? 1)}
              </Text>
            </View>
          </View>
          <View style={messageStyle.bottomWrapper}>
            {isEditing ? (
              <View
                style={{
                  flex: 1,
                  minWidth: PlatfromWidth - 140,
                }}
              >
                <Input
                  value={inputText}
                  onChangeText={setInputText}
                  style={messageStyle.input}
                />
                <View style={messageStyle.inputButtonWrapper}>
                  <TouchableOpacity
                    onPress={() => onChangeTweet(inputText)}
                    style={messageStyle.inputButtons}
                  >
                    <Entypo name="check" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={onEditCancel}
                    style={messageStyle.inputButtons}
                  >
                    <Entypo name="cross" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  flexShrink: 1,
                }}
              >
                {tweet}
              </Text>
            )}
          </View>
        </View>
        <View>
          {isEditable && !isEditing && (
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
              }}
              onPress={() => {
                onEdit &&
                  onEdit({
                    createdAt,
                    id,
                    updatedAt,
                    tweet,
                    username,
                  });
              }}
            >
              <Feather name="edit-2" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
