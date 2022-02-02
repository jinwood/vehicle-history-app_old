import { addDoc, collection } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "../firebase";
import { getVehicles, queryVehicle, Vehicle } from "../store/vehicle";

export const vehicleContext = createContext<Vehicle | null>(null);

export function ProvideVehicle({ children }: { children: ReactNode }) {
  const { vehicle } = useProvideVehicle();
  const Provider = vehicleContext.Provider;

  return <Provider value={vehicle}>{children}</Provider>;
}

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
        ...vehicle,
        uid,
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

export function useProvideVehicle() {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const getVehicle = async (uid: string) => {
    setLoading(true);
    try {
      const vehicle = await queryVehicle(uid);
      console.log("v", vehicle);
      setVehicle(vehicle);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(String(error));
    }
  };

  return { vehicle, loading, error, getVehicle };
}
