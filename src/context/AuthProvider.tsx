import { useSegments, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  AuthError,
  UserCredential,
} from "firebase/auth";
import firebaseAuth from "../firebase";
import SplashScreen from "../screens/SplashScreen";

const auth = getAuth();

type AuthType = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<UserCredential | AuthError | undefined>;
  SignUp: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<UserCredential | AuthError | undefined>;
};

export const AuthContext = createContext<AuthType>({
  user: null,
  isLoading: false,
  setUser: () => {},
  logout: () => {},
  login: async ({}: { email: string; password: string }) => {
    return undefined;
  },
  SignUp: async ({}: { email: string; password: string }) => {
    return undefined;
  },
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: User | null, loadingState: boolean) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!loadingState) {
      const inAuthGroup = segments[0] === "(auth)";

      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        router.replace("/login");
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace("/home");
      }
    }
  }, [user, segments, loadingState]);
}

export function AuthProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  useProtectedRoute(user, initializing);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const res: UserCredential | AuthError = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => err);
      setLoading(false);
      if ((res as UserCredential)?.user) {
        setUser((res as UserCredential).user);
      }
      return res;
    } catch (error) {
      setLoading(false);
      console.error("Login error: ", error);
    }
  };

  const SignUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((err) => err);
      setLoading(false);
      if ((res as UserCredential)?.user) {
        setUser((res as UserCredential).user);
      }
      return res;
    } catch (error) {
      setLoading(false);
      console.log("Signup error: ", error);
    }
  };

  function logout() {
    try {
      signOut(auth).catch((e) => {
        console.log("error: ", e);
      });
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (firebaseAuth) {
      const unsubscribeFromAuthStateChanged = onAuthStateChanged(
        auth,
        (user) => {
          setInitializing(false);
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        }
      );

      return unsubscribeFromAuthStateChanged;
    }
  }, []);

  const authContext: AuthType = {
    user,
    isLoading,
    logout,
    setUser,
    login,
    SignUp,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {initializing ? <SplashScreen /> : children}
    </AuthContext.Provider>
  );
}
