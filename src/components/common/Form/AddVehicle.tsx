//https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-form-using-tailwindcss--cms-34128
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, overflow: "scroll" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="manufacturer-label">Manufacturer</InputLabel>
              <Select
                label="Manufacturer"
                labelId="manufacturer-label"
                {...register("manufacturer", { required: true })}
              >
                {Object.keys(VehicleManufacturer).map((key: any) => (
                  <MenuItem key={key} value={key}>
                    {
                      VehicleManufacturer[
                        key as keyof typeof VehicleManufacturer
                      ]
                    }
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <TextField
                fullWidth={true}
                label="Model"
                {...register("model", { required: true, value: "M235i" })}
              />
              {errors.model && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={1}>
            <FormControl fullWidth>
              <TextField
                label="Year"
                {...register("year", { required: true, value: 2020 })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={1}>
            <FormControl fullWidth>
              <TextField
                label="Engine Size"
                {...register("engineSize", { required: true, value: 3000 })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={1}>
            <FormControl fullWidth>
              <InputLabel id="fuelType-label">Fuel Type</InputLabel>
              <Select
                label="Fuel Type"
                labelId="fuelType-label"
                {...register("fuelType", { required: true })}
              >
                {Object.keys(FuelType).map((key: any) => (
                  <MenuItem key={key} value={key}>
                    {FuelType[key as keyof typeof FuelType]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={1}>
            <FormControl fullWidth>
              <TextField
                label="Purchase Price"
                {...register("purchasePrice", { required: true, value: 19000 })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                InputLabelProps={{ shrink: true }}
                type={"date"}
                label="Purchase Date"
                {...register("purchaseDate", {
                  required: true,
                  value: new Date("01/06/2020"),
                })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Mileage"
                {...register("mileage", {
                  required: true,
                  value: 50000,
                })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Notes"
                {...register("notes", {
                  required: true,
                })}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton variant="contained" type="submit" sx={{ mt: 2 }}>
            Add Vehicle
          </LoadingButton>
        </Grid>
      </Box>
    </Box>
  );
}

export default AddVehicle;
