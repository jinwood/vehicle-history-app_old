import { VehicleManufacturer } from "./config";

export enum AuthType {
  UNKNOWN = "UNKNOWN",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export enum FuelType {
  "Petrol" = "Petrol",
  "Diesel" = "Diesel",
  "Electric" = "Electric",
  "HybridPetrol" = "Hybrid Petrol",
  "HybridDiesel" = "Hybrid Diesel",
}

export interface Credentials {
  email: string;
  password: string;
}

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
  images: string[];
}
