import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useHasVehicles } from "../hooks/vehicles";

const Home = () => {
  const [user, loading, error] = useAuthState(getAuth());
  const hasVehicles = useHasVehicles();
  const location = useLocation();
  return (
    <>
      <div>You're logged in as {user?.email}</div>
      {hasVehicles && <>You have a vehicle</>}
      {!hasVehicles && (
        <>
          You don't have a vehicle.{" "}
          <Link className="text-blue-600" to="add-vehicle">
            Add one.
          </Link>
        </>
      )}
    </>
  );
};

export default Home;
