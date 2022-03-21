import { getStorage, ref } from "firebase/storage";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectVehicle } from "../../store/slices/vehicleSlice";
import useGetVehicle from "../../hooks/vehicles";
import { selectUser } from "../../store/slices/userSlice";

export default function MyVehicle() {
  const user = useSelector(selectUser);
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
              Your vehicle
            </Typography>
            <Typography component="div" variant="h6">
              {vehicle.manufacturer} {vehicle.model}
            </Typography>
          </Container>
        </Paper>
      </Box>
    </>
  );
}
