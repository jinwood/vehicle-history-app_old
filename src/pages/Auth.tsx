import React, { useState } from "react";
import { useLocation } from "react-router";
import AuthForm from "../components/common/Form/AuthForm";
import { AuthType } from "../types";

const Auth = (props: { title: string }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = (action: AuthType) => {
    console.log("action", action);
  };

  const getAuthType = (): AuthType => {
    switch (path) {
      case "login":
        return AuthType.LOGIN;
      case "register":
        return AuthType.REGISTER;
      default:
        return AuthType.UNKNOWN;
    }
  };

  return (
    <AuthForm
      setEmail={setEmail}
      setPassword={setPassword}
      handleAction={() => handleAction(getAuthType())}
      {...props}
    />
  );
};

export default Auth;
