import { VehicleManufacturer } from "./config";

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
}

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

export interface MediaItem {
  uid: string;
  mediaType: MediaType;
  url: string;
  name?: string;
  size: number;
  createdAt: Date;
}

export interface Vehicle {
  vehicleId: string;
  manufacturer: VehicleManufacturer;
  model: string;
  year: number;
  engineSize: number;
  fuelType: string;
  purchasePrice: number;
  purchaseDate: Date;
  mileage: number;
  notes: string;
  mediaItems: MediaItem[];
}
