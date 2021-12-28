import { addDoc, collection } from "@firebase/firestore";
import { VehicleManufacturer } from "../config";
import { db } from "../firebase";

export interface Vehicle {
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
    console.log(`Vehicle created with id: ${docRef.id}`);
  } catch (error) {
    console.error(error);
  }
};
