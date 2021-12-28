import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "@firebase/auth";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/common/Form/AuthForm";
import { useHasVehicles } from "../hooks/vehicles";
import { AuthType } from "../types";

const Auth = (props: { title: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/")[1];
  const hasVehicles = useHasVehicles();

  const handleAction = (data: any) => {
    const action = getAuthType();
    const { email, password } = data;
    const authentication = getAuth();

    if (!email || !password) {
      return;
    }

    if (action === AuthType.LOGIN) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((result: UserCredential) => {
          if (hasVehicles) {
            // navigate to my vehicles
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
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
