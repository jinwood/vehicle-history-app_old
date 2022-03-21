import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../components/common/Form/Auth";
import { useProvideAuth } from "../hooks/auth";
import { AuthType, Credentials } from "../types";

interface AuthProps {
  type: AuthType;
}

export default function LoginRegister({ type }: AuthProps) {
  const flipType = (type: AuthType) =>
    type === AuthType.LOGIN ? AuthType.REGISTER : AuthType.LOGIN;
  const navigate = useNavigate();
  const { signIn, signUp, loading, error } = useProvideAuth();
  const [authType, setAuthType] = useState<AuthType>(flipType(type));

  const handleSignIn = ({ email, password }: Credentials) => {
    if (!email || !password) {
      return;
    }
    if (authType === AuthType.LOGIN) {
      signIn(email, password);
    } else {
      signUp(email, password).then(() => navigate("/"));
    }
  };

  return (
    <>
      <Button
        onClick={() =>
          setAuthType(
            authType === AuthType.REGISTER ? AuthType.LOGIN : AuthType.REGISTER
          )
        }
      >
        {authType !== AuthType.LOGIN ? "Sign In" : "Register"}
      </Button>
      <Auth
        handleAction={(data: any) => handleSignIn(data)}
        loading={loading}
        type={authType}
      />
      <p>{error?.message}</p>
    </>
  );
}
