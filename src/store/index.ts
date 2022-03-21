import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import vehicleReducer from "./slices/vehicleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicle: vehicleReducer,
  },
});
