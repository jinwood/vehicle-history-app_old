import { User } from "firebase/auth";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useHasVehicles } from "../hooks/vehicles";

const Home = ({ user }: { user: User }) => {
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
