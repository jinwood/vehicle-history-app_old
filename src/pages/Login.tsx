import { useNavigate } from "react-router-dom";
import AuthForm from "../components/common/Form/AuthForm";
import { useProvideAuth } from "../hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, loading } = useProvideAuth();
  console.log(loading);

  const handleSignIn = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email || !password) {
      return;
    }
    signIn(email, password).then(() => navigate("/"));
  };

  return (
    <>
      <h1>Login Page</h1>
      <AuthForm
        handleAction={(data: any) => handleSignIn(data)}
        loading={loading}
      />
      {/* <p>{error?.message}</p> */}
    </>
  );
};

export default Login;
