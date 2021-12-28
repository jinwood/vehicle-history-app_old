import { getAuth } from "@firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;
  if (!user) {
    navigate("/login");
  }
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <div>You're logged in as {user?.email}</div>;
};

export default Home;
