import { getAuth } from "@firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useHasVehicles } from "../hooks/vehicles";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const hasVehicles = useHasVehicles();

  const user = auth.currentUser;
  if (!user) {
    console.log("no user");
    navigate("/login");
  } else {
    console.log("user is", user);
  }
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <>
      <div>You're logged in as {user?.email}</div>{" "}
      {!hasVehicles && (
        <div>
          You don't have any vehicles. <a href="/add-vehicle">Add one.</a>
        </div>
      )}
    </>
  );
};

export default Home;
