import { User } from "firebase/auth";
import { useEffect } from "react";
import MyVehicle from "../components/MyVehicle";
import useGetVehicle from "../hooks/vehicles";

const Home = ({ user }: { user: User }) => {
  const { vehicle, loading, error, execute } = useGetVehicle();

  useEffect(() => {
    if (!vehicle) {
      execute(user.uid);
    }
  }, [user.uid, vehicle, execute]);

  return (
    <>
      <div>You're logged in as {user?.email}</div>
      {vehicle && <MyVehicle vehicle={vehicle} />}
    </>
  );
};

export default Home;
