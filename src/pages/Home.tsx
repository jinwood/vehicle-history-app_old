import { Link } from "@mui/material";
import { User } from "firebase/auth";
import { useContext } from "react";
import MyVehicle from "../components/MyVehicle";
import { useProvideVehicle, vehicleContext } from "../hooks/vehicles";

const Home = ({ user }: { user: User }) => {
  // const { getVehicle } = useProvideVehicle();
  // getVehicle(user.uid);
  // const vehicle = useContext(vehicleContext);
  return (
    <>
      <div>You're logged in as {user?.email}</div>
      {/* {vehicle && <h1>{vehicle.manufacturer}</h1>} */}
    </>
  );
};

export default Home;
