//https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-form-using-tailwindcss--cms-34128
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import { FuelType } from "../../../types";

function AddVehicle({
  handleAction,
}: {
  handleAction: (data: Vehicle) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vehicle>();

  const onSubmit = (vehicle: Vehicle) => {
    handleAction(vehicle);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={6}>
            <InputLabel id="manufacturer-label">Manufacturer</InputLabel>
            <Select
              fullWidth={true}
              labelId="manufacturer-label"
              {...register("manufacturer", { required: true })}
            >
              {Object.keys(VehicleManufacturer).map((key: any) => (
                <MenuItem key={key} value={key}>
                  {VehicleManufacturer[key as keyof typeof VehicleManufacturer]}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              label="Model"
              {...register("model", { required: true, value: "M235i" })}
            />
            {errors.model && <span>This field is required</span>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Year"
              {...register("year", { required: true, value: 2020 })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Engine Size"
              {...register("engineSize", { required: true, value: 3000 })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="fuelType-label">Fuel Type</InputLabel>
            <Select
              fullWidth={true}
              labelId="fuelType-label"
              {...register("fuelType", { required: true })}
            >
              {Object.keys(FuelType).map((key: any) => (
                <MenuItem key={key} value={key}>
                  {FuelType[key as keyof typeof FuelType]}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Purchase Price"
              {...register("purchasePrice", { required: true, value: 19000 })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type={"date"}
              label="Purchase Date"
              {...register("purchaseDate", {
                required: true,
                value: new Date("01/06/2020"),
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mileage"
              {...register("mileage", {
                required: true,
                value: 50000,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Notes"
              {...register("notes", {
                required: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton variant="contained" type="submit">
            Add Vehicle
          </LoadingButton>
        </Grid>
      </Box>
    </Box>
  );
}

export default AddVehicle;
