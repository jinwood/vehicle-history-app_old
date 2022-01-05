import { getAuth } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/common/Form/AuthForm";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }

  const handleAction = (data: { email: string; password: string }) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <h1>Login Page</h1>
      <AuthForm
        handleAction={(data: any) => handleAction(data)}
        loading={loading}
      />
      <p>{error?.message}</p>
    </>
  );
};

export default Login;
