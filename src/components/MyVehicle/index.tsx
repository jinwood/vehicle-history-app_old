import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectVehicle } from "../../store/slices/vehicleSlice";

export default function MyVehicle() {
  const navigate = useNavigate();
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;

  return (
    <Paper>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ pt: 2, pb: 1, pl: 2, pr: 2 }}
      >
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
          <Typography component="div" variant="body1">
            You don't currently have any images.{" "}
            <Link onClick={() => navigate("/vehicle-images")}> Add one?</Link>
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
