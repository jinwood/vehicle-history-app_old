import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const authContext = createContext<User | null>(null);

export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  const Provider = authContext.Provider;

  return <Provider value={auth.user}>{children}</Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signOut = () => {
    auth.signOut();
    setUser(null);
  };

  const sendUserPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const confirmUserPasswordReset = (code: string, password: string) => {
    return confirmPasswordReset(auth, code, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return {
    user,
    signIn,
    signUp,
    signOut,
    sendUserPasswordResetEmail,
    confirmUserPasswordReset,
  };
}
