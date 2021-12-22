import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { useLocation } from "react-router";
import AuthForm from "../components/common/Form/AuthForm";
import { AuthType } from "../types";

const Auth = (props: { title: string }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const handleAction = (data: any) => {
    const action = getAuthType();
    const { email, password } = data;
    console.log(email, password);

    const authentication = getAuth();

    if (action === AuthType.LOGIN) {
    } else if (action === AuthType.REGISTER) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          console.log("response", response);
        }
      );
    }
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
    <AuthForm handleAction={(data: any) => handleAction(data)} {...props} />
  );
};

export default Auth;
