import {
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db, TWEET_COLLECTION, tweetsDbRef } from ".";
import { TtweetApi } from "../data.type";

export const getTweets = async () => {
  try {
    const q = query(tweetsDbRef, orderBy("createdAt", "desc"));
    const tweetsSnapShot = await getDocs(q);

    const tweets: TtweetApi[] = [];
    tweetsSnapShot.forEach((doc) => {
      tweets.push({
        ...(doc.data() as TtweetApi),
        id: doc.id,
      });
    });
    return tweets;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const editTweet = async (tweet: TtweetApi) => {
  try {
    const docRef = doc(db, TWEET_COLLECTION, tweet.id);
    const res = await updateDoc(docRef, {
      tweet: tweet.tweet,
    });
    return res;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const addTweet = async (
  tweet: Omit<TtweetApi, "createdAt" | "updatedAt" | "id">
) => {
  try {
    const docRef = await addDoc(tweetsDbRef, {
      ...tweet,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef;
  } catch (error) {
    console.log("error: ", error);
  }
};
