import { addDoc, collection, getDocs } from "@firebase/firestore";
import { doc, getDoc, query, where } from "firebase/firestore";
import { VehicleManufacturer } from "../config";
import { db } from "../firebase";

export interface Vehicle {
  uid: string;
  manufacturer: VehicleManufacturer;
  model: string;
  year: number;
  engineSize: number;
  fuelType: string;
  purchasePrice: number;
  purchaseDate: Date;
  mileage: number;
  notes: string;
}

export const createVehicle = async (vehicle: Vehicle) => {
  try {
    const docRef = await addDoc(collection(db, "vehicles"), {
      ...vehicle,
    });
    return (await docRef?.id.length) > 0;
  } catch (error) {
    return String(error);
  }
};

export async function queryVehicle(uid: string): Promise<Vehicle> {
  try {
    const ref = collection(db, "vehicles");
    const q = query(ref, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((qs) => {
      console.log(qs.data());
    });

    const data = querySnapshot.docs[0].data();

    if (data.exists()) {
      const vehicle: Vehicle = {
        uid: data.id,
        manufacturer: data?.manufacturer,
        model: data?.model,
        year: data?.year,
        engineSize: data?.engineSize,
        fuelType: data?.fuelType,
        purchasePrice: data?.purchasePrice,
        purchaseDate: data?.purchaseDate,
        mileage: data?.mileage,
        notes: data?.notes,
      };
      console.log(`returning vehicle ${vehicle.manufacturer}`);
      return vehicle;
    } else {
      throw new Error(`no vehicle found for uid ${uid}`);
    }
  } catch (error) {
    throw new Error(String(error));
  }
}

export const getVehicles = async () => {
  const querySnapshot = await getDocs(collection(db, "vehicles"));
  const vehicles = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return vehicles;
};
