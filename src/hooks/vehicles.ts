import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getVehicles, Vehicle } from "../store/vehicle";

export const useHasVehicles = () => {
  const [hasVehicles, setHasVehicles] = useState(false);
  useEffect(() => {
    getVehicles().then((vehicles) => {
      setHasVehicles(vehicles.length > 0);
    });
  }, []);
  return hasVehicles;
};

export const useAddVehicle = () => {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const newVehicle = async (vehicle: Vehicle) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "vehicles"), {
        ...vehicle,
      });
      setLoading(false);
      return (await docRef?.id.length) > 0;
    } catch (error) {
      setLoading(false);
      setError(String(error));
      return false;
    }
  };
  return { error, loading, newVehicle };
};
