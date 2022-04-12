import { createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../../types";

type VehicleState = {
  vehicle: {
    vehicle?: Vehicle;
  };
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: {
    vehicle: undefined,
  },
  reducers: {
    getVehicle: (state, action) => {
      console.log("getVehicle");
      console.log(action.payload);
      state.vehicle = action.payload;
    },
    createVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export const { getVehicle, createVehicle } = vehicleSlice.actions;

export const selectVehicle = (state: VehicleState) => state.vehicle;

export default vehicleSlice.reducer;
