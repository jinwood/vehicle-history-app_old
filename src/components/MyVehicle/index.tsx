import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectVehicle } from "../../store/slices/vehicleSlice";
import { Skeleton } from "@mui/material";

export default function MyVehicle() {
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "inline-block",
          width: "100%",
        }}
      >
        <Paper>
          <Container disableGutters maxWidth="xl" sx={{ pt: 2, pb: 1, pl: 5 }}>
            <Typography component="div" variant="h5">
              {vehicle?.manufacturer} {vehicle?.model}
            </Typography>
            <Typography component="div" variant="body1">
              You're driving a {vehicle?.year} {vehicle?.manufacturer}{" "}
              {vehicle?.model} which you bought on {vehicle?.purchaseDate} for £
              {vehicle?.purchasePrice}. It has a {vehicle?.engineSize} CC{" "}
              {vehicle?.fuelType} engine.
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Skeleton variant="rectangular" width={450} height={300} />
            </Box>
          </Container>
        </Paper>
      </Box>
    </>
  );
}
