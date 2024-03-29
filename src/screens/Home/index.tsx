import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Message from "../../components/Message";
import { homeStyle } from "./home.style";
import useHome from "./useHome";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { HOME_CONTENT } from "./home.constant";

export default function Home() {
  const {
    tweets,
    currentEmail,
    selectedTweets,
    showAddTweetInput,
    newTweetText,
    tweetInputError,
    setNewTweetText,
    onShowAddTweetInput,
    onEditCancel,
    editClick,
    onEditTweet,
    onAddTweet,
  } = useHome();
  return (
    <View style={homeStyle.bodyWrapper}>
      <Text style={homeStyle.title}>{HOME_CONTENT.title}</Text>
      <ScrollView style={homeStyle.scrollView}>
        {tweets ? (
          tweets.map((e) => (
            <Message
              key={e.id}
              {...e}
              isEditing={e.id === selectedTweets?.id}
              onChangeTweet={onEditTweet}
              onEditCancel={onEditCancel}
              onEdit={editClick}
              isEditable={e.username === currentEmail}
            />
          ))
        ) : (
          <Text style={homeStyle.textCenter}>
            {typeof tweets === "undefined"
              ? "Loading..."
              : "No tweets found..."}
          </Text>
        )}
      </ScrollView>

      <View style={homeStyle.inputWrapper}>
        {!showAddTweetInput ? (
          <Button onPress={onShowAddTweetInput}>
            {HOME_CONTENT.newTweetTxt}
          </Button>
        ) : (
          <>
            <Input
              label={HOME_CONTENT.newTweetTxt}
              error={tweetInputError}
              value={newTweetText}
              onChangeText={setNewTweetText}
              style={homeStyle.input}
            />
            <View style={homeStyle.inputButtonWrapper}>
              <TouchableOpacity
                onPress={() => onAddTweet()}
                style={homeStyle.inputButtons}
              >
                <Text style={homeStyle.inputButtonText}>
                  {HOME_CONTENT.pstTxt}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onEditCancel}
                style={homeStyle.inputButtons}
              >
                <Text style={homeStyle.inputButtonText}>
                  {HOME_CONTENT.cnclTxt}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
