import { addDoc, collection } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "../firebase";
import { getVehicles, Vehicle } from "../store/vehicle";

const vehicleContext = createContext<Vehicle[] | null>(null);

export function ProvideVehicle({ children }: { children: ReactNode }) {}

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
  const addVehicle = async (uid: string, vehicle: Vehicle) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "vehicles"), {
        uid,
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
  return { error, loading, addVehicle };
};
