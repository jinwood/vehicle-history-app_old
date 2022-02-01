import LoadingButton from "@mui/lab/LoadingButton";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import { FuelType } from "../../../types";
import ControlledSelect from "./ControlledSelect";
import Alert from "@mui/material/Alert";

interface Props {
  handleAction: (data: Vehicle) => void;
  error?: string;
  loading: boolean;
}

export default function AddVehicle({ handleAction, loading, error }: Props) {
  const {
    register,
    handleSubmit,
    control,
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
            <ControlledSelect
              defaultValue=""
              name="manufacturer"
              label="Manufacturer"
              control={control}
              values={Object.keys(VehicleManufacturer).map((v) => {
                return { value: v, label: v };
              })}
              variant="outlined"
              fullWidth
            />
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
            <ControlledSelect
              name="fuelType"
              label="Fuel Type"
              control={control}
              values={Object.keys(FuelType).map((v) => {
                return { value: v, label: v };
              })}
              defaultValue={FuelType.Petrol}
              variant="outlined"
              fullWidth
            />
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
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
            loading={loading}
          >
            Add Vehicle
          </LoadingButton>
        </Grid>
        {error && error.length && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
