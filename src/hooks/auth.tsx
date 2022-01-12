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

const authContext = createContext<User | null | null>(null);

export function ProvideAuth({ children }: { children: ReactNode }) {
  const { auth: user } = useProvideAuth();
  const Provider = authContext.Provider;

  return <Provider value={user}>{children}</Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email: string, password: string) => {
    console.log("signIn", email, password);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setLoading(false);
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
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return {
    auth: user,
    loading,
    signIn,
    signUp,
    signOut,
    sendUserPasswordResetEmail,
    confirmUserPasswordReset,
  };
}
