import { addDoc, collection, getDocs } from "@firebase/firestore";
import { query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Vehicle } from "../types";

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
        images: [],
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

export const getVehicles = async (uid: string) => {
  const querySnapshot = await getDocs(collection(db, "vehicles"));
  const vehicles = querySnapshot.docs.map((doc) => {
    return {
      ...(doc.data() as Vehicle),
    };
  })[0];
  return vehicles;
};
