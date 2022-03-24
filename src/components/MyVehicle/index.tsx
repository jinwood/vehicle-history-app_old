import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectVehicle } from "../../store/slices/vehicleSlice";
import { Gallery } from "../common/Gallery";

export default function MyVehicle() {
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography component="div" variant="h5">
              {vehicle?.manufacturer} {vehicle?.model}
            </Typography>
            <Typography component="div" variant="body1">
              You're driving a {vehicle?.year} {vehicle?.manufacturer}{" "}
              {vehicle?.model} which you bought on {vehicle?.purchaseDate} for £
              {vehicle?.purchasePrice}. It has a {vehicle?.engineSize} CC{" "}
              {vehicle?.fuelType} engine.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Gallery />
        </Grid>
      </Grid>
    </Box>
  );
}
