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
