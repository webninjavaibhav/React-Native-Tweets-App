import { useContext, useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { TtweetApi } from "../../data.type";
import { addTweet, editTweet, getTweets } from "../../firebase/services";
import { AuthContext } from "../../context/AuthProvider";
import { tweetsDbRef } from "../../firebase";

function useHome() {
  const { user } = useContext(AuthContext);
  const [tweets, setTweets] = useState<TtweetApi[]>();
  const [selectedTweets, setSelectedTweets] = useState<TtweetApi>();
  const [showAddTweetInput, setShowAddTweetInput] = useState<boolean>(false);
  const [newTweetText, setNewTweetText] = useState<string>("");
  const [tweetInputError, setTweetInputError] = useState<string>("");
  const initializeTweets = async () => {
    try {
      const tweetsList = await getTweets();
      setTweets(tweetsList as TtweetApi[]);
    } catch (error) {}
  };

  const onAddTweet = async () => {
    try {
      if (newTweetText.trim().length > 0) {
        const res = await addTweet({
          tweet: newTweetText.trim(),
          username: user?.email as string,
        });
        if (res) {
          await initializeTweets();
          setNewTweetText("");
          setShowAddTweetInput(false);
        }
      } else {
        setTweetInputError("Tweet cannot be empty..");
      }
    } catch (error) {}
  };

  const onEditTweet = async (newTweetText: string) => {
    try {
      await editTweet({
        ...(selectedTweets as TtweetApi),
        tweet: newTweetText,
      });
      await initializeTweets();
      setSelectedTweets(undefined);
    } catch (error) {}
  };

  const editClick = async (forEditTweet: TtweetApi) => {
    setSelectedTweets(forEditTweet);
    setShowAddTweetInput(false);
    setNewTweetText("");
  };

  const onHideTweetInput = () => {
    try {
      setNewTweetText("");
      setTweetInputError("");
      setShowAddTweetInput(false);
    } catch (error) {}
  };

  const onEditCancel = () => {
    setSelectedTweets(undefined);
    onHideTweetInput();
  };

  const onShowAddTweetInput = () => {
    try {
      setShowAddTweetInput(true);
      setSelectedTweets(undefined);
    } catch (error) {}
  };

  useEffect(() => {
    initializeTweets();
    const distructiveFunction = onSnapshot(tweetsDbRef, () => {
      initializeTweets();
    });
    return distructiveFunction;
  }, []);

  return {
    tweets,
    selectedTweets,
    currentEmail: user?.email ?? "",
    showAddTweetInput,
    newTweetText,
    tweetInputError,
    onEditTweet,
    setNewTweetText,
    onShowAddTweetInput,
    onEditCancel,
    onAddTweet,
    editClick,
  };
}

export default useHome;
