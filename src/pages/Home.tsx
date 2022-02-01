import { Link } from "@mui/material";
import { User } from "firebase/auth";
import MyVehicle from "../components/MyVehicle";
import { useHasVehicles } from "../hooks/vehicles";

const Home = ({ user }: { user: User }) => {
  const hasVehicles = useHasVehicles();
  return (
    <>
      <div>You're logged in as {user?.email}</div>
      {hasVehicles && <MyVehicle />}
      {!hasVehicles && (
        <>
          You don't have a vehicle. <Link href="add-vehicle">Add one.</Link>
        </>
      )}
    </>
  );
};

export default Home;
