import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/common/Form/AuthForm";
import Button from "../components/common/Form/Button";
import { useProvideAuth } from "../hooks/auth";
import { AuthType } from "../types";

interface AuthProps {
  type: AuthType;
}

export default function Auth({ type }: AuthProps) {
  const flipType = (type: AuthType) =>
    type === AuthType.LOGIN ? AuthType.REGISTER : AuthType.LOGIN;
  const navigate = useNavigate();
  const { signIn, signUp, loading, error } = useProvideAuth();
  const [authType, setAuthType] = useState<AuthType>(flipType(type));

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
    if (authType === AuthType.LOGIN) {
      signIn(email, password).then(() => navigate("/"));
    } else {
      signUp(email, password).then(() => navigate("/"));
    }
  };

  return (
    <>
      <Button
        type="button"
        size="small"
        label={authType !== AuthType.LOGIN ? "Sign In" : "Register"}
        handleAction={() =>
          setAuthType(
            authType === AuthType.REGISTER ? AuthType.LOGIN : AuthType.REGISTER
          )
        }
      />
      <AuthForm
        handleAction={(data: any) => handleSignIn(data)}
        loading={loading}
        type={authType}
      />
      <p>{error?.message}</p>
    </>
  );
}
