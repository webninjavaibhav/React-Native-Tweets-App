import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA38e3BGWu5oGGRbSsuqNSuKsXcJrORSBo",
  authDomain: "rn-twitter-demo-28-march.firebaseAuth.com",
  projectId: "rn-twitter-demo-28-march",
  storageBucket: "rn-twitter-demo-28-march.appspot.com",
  messagingSenderId: "392989548361",
  appId: "1:392989548361:web:6cc01219981919c7d8c498",
  measurementId: "G-KYWMGP7L3Y",
};

const firebaseApp = initializeApp(firebaseConfig);

// add code below to init auth with custom persistence

const myReactNativeLocalPersistence = getReactNativePersistence({
  getItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.getItem(...args);
  },
  setItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.setItem(...args);
  },
  removeItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.removeItem(...args);
  },
});

const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: myReactNativeLocalPersistence,
});

const db = getFirestore(firebaseApp);

export { db, firebaseApp };

export const TWEET_COLLECTION = "tweets";

export const tweetsDbRef = collection(db, TWEET_COLLECTION);

export default firebaseAuth;
