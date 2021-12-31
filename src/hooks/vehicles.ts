import { useEffect, useState } from "react";
import { getVehicles } from "../store/vehicle";

export const useHasVehicles = () => {
  console.log("useHasVehicles");
  const [hasVehicles, setHasVehicles] = useState(false);
  useEffect(() => {
    getVehicles().then((vehicles) => {
      console.log("useHasVehicles", vehicles.length);
      setHasVehicles(vehicles.length > 0);
    });
  }, []);
  return hasVehicles;
};
