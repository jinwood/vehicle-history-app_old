import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyVehicle from "../components/MyVehicle";
import { useProvideAuth } from "../hooks/auth";
import useGetVehicle from "../hooks/vehicles";
import { selectUser } from "../store/slices/userSlice";

const Home = () => {
  const user = useSelector(selectUser);
  const isSignedIn = !!user;
  const { vehicle, loading, error, execute } = useGetVehicle();
  const { signOut } = useProvideAuth();

  const handleLogout = () => {
    signOut();
  };

  useEffect(() => {
    if (!vehicle) {
      execute(user.uid);
    }
  }, [user.uid, vehicle, execute]);

  return (
    <>
      {error && <div>Something bad happened: {error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && isSignedIn && (
        <div>
          <span>You're logged in as {user?.email}</span>{" "}
          <Link onClick={handleLogout}>Logout</Link>
        </div>
      )}
      {vehicle && <MyVehicle vehicle={vehicle} />}
    </>
  );
};

export default Home;
