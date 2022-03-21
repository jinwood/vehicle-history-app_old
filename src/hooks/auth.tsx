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
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { login, logout } from "../store/slices/userSlice";

const authContext = createContext<User | null | null>(null);

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { auth: user, loading } = useProvideAuth();

  let location = useLocation();

  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

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
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setLoading(false);
        setUser(response.user);
        dispatch(login({ ...response.user, uid: response.user.uid }));
        return response.user;
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
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
    console.log("signOut");
    auth.signOut();
    setUser(null);
    dispatch(logout());
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
    error,
    signIn,
    signUp,
    signOut,
    sendUserPasswordResetEmail,
    confirmUserPasswordReset,
  };
}
