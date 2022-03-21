import Link from "@mui/material/Link";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyVehicle from "../components/MyVehicle";
import useGetVehicle from "../hooks/vehicles";
import { logout } from "../store/slices/userSlice";

const Home = ({ user }: { user: User }) => {
  const { vehicle, loading, error, execute } = useGetVehicle();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
      {!loading && user && (
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
