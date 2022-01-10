import { getAuth, User } from "firebase/auth";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/common/Form/AuthForm";
import { useProvideAuth } from "../hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useProvideAuth();

  const handleSignIn = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => signIn(email, password).then(() => navigate("/"));

  return (
    <>
      <h1>Login Page</h1>
      <AuthForm
        handleAction={(data: any) => handleSignIn(data)}
        loading={false}
      />
      {/* <p>{error?.message}</p> */}
    </>
  );
};

export default Login;
