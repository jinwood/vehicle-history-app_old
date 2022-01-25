import { useEffect, useState } from "react";
import { getVehicles } from "../store/vehicle";

export const useHasVehicles = () => {
  const [hasVehicles, setHasVehicles] = useState(false);
  useEffect(() => {
    getVehicles().then((vehicles) => {
      setHasVehicles(vehicles.length > 0);
    });
  }, []);
  return hasVehicles;
};
