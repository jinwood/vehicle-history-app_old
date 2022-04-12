import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyVehicle from "../components/MyVehicle";
import { useProvideAuth } from "../hooks/auth";
import useGetVehicle from "../hooks/vehicles";
import { isSignedIn, selectUser } from "../store/slices/userSlice";
import { selectVehicle } from "../store/slices/vehicleSlice";

const Home = () => {
  const user = useSelector(selectUser);
  const { execute } = useGetVehicle();
  const signedIn = useSelector(isSignedIn);
  const { signOut } = useProvideAuth();
  const vehicle = useSelector(selectVehicle);
  console.log("vehicle", vehicle);
  const hasVehicle = !!vehicle?.vehicle;

  useEffect(() => {
    if (!hasVehicle) {
      execute(user.uid);
    }
  }, [execute, hasVehicle, user.uid, vehicle]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {signedIn && (
        <div>
          <span>You're logged in as {user?.email}</span>{" "}
          <Link onClick={handleLogout}>Logout</Link>
        </div>
      )}
      {hasVehicle && <MyVehicle />}
    </>
  );
};

export default Home;
