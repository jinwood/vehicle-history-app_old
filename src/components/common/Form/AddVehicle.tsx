//https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-form-using-tailwindcss--cms-34128
import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import { FuelType } from "../../../types";
import ReactHookFormSelect from "../Select";

function AddVehicle({
  handleAction,
}: {
  handleAction: (data: Vehicle) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Vehicle>();

  const onSubmit = (vehicle: Vehicle) => {
    handleAction(vehicle);
  };

  console.log(watch("manufacturer"));
  console.log(watch("model"));

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
            <ReactHookFormSelect
              defaultValue=""
              name="manufacturer"
              label="Manufacturer"
              control={control}
              variant="outlined"
              fullWidth
            >
              {Object.keys(VehicleManufacturer).map((key: any) => (
                <MenuItem key={key} value={key}>
                  {VehicleManufacturer[key as keyof typeof VehicleManufacturer]}
                </MenuItem>
              ))}
            </ReactHookFormSelect>
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
          <Grid item xs={12}>
            <ReactHookFormSelect
              name="fuelType"
              label="Fuel Type"
              control={control}
              defaultValue={FuelType.Petrol}
              variant="outlined"
              fullWidth
            >
              {Object.keys(FuelType).map((key: any) => (
                <MenuItem key={key} value={key}>
                  {FuelType[key as keyof typeof FuelType]}
                </MenuItem>
              ))}
            </ReactHookFormSelect>
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
          <Grid item xs={12} lg={1}>
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
