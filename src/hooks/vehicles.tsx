import { addDoc, collection } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../firebase";
import { getVehicles, Vehicle } from "../store/vehicle";

export const useHasVehicles = (uid: string) => {
  const [hasVehicles, setHasVehicles] = useState(false);
  useEffect(() => {
    getVehicles(uid).then((vehicles) => {
      setHasVehicles(!!vehicles);
    });
  }, [uid]);
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

export default function useGetVehicle() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  const execute = async (uid: string) => {
    console.log("useGetVehicle", uid);
    setLoading(true);
    try {
      const vehicle = await getVehicles(uid);
      setVehicle(vehicle);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(String(error));
    }
  };

  return {
    loading,
    error,
    vehicle,
    execute: useCallback(execute, []),
  };
}
