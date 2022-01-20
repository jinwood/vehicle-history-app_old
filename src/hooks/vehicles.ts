import { useEffect, useState } from "react";
import { createVehicle, getVehicles, Vehicle } from "../store/vehicle";

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

export function useCreateVehicle(newVehicle: Vehicle) {
  console.log("useCreateVehicle");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const result = createVehicle(newVehicle).then((result) => {
      console.log("useCreateVehicle", result);
      setLoading(false);
    });
  }, []);
  return {
    loading,
  };
}
