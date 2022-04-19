import { addDoc, collection } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { createVehicle, getVehicle } from "../store/slices/vehicleSlice";
import { getVehicles } from "../store/vehicle";
import { Vehicle } from "../types";

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
  const dispatch = useDispatch();
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
      dispatch(createVehicle({ ...vehicle, id: docRef.id }));
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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [vehicle, setVehicle] = useState<Vehicle | undefined>();

  const execute = async (uid: string) => {
    setLoading(true);
    try {
      const vehicle = await getVehicles(uid);
      setVehicle(vehicle);
      setLoading(false);

      const payload = vehicle ? { ...vehicle } : undefined;
      dispatch(getVehicle(payload));
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
