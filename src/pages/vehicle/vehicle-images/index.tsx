import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { uploadFile } from "../../../api/media";
import { selectVehicle } from "../../../store/slices/vehicleSlice";

export default function VehicleImages() {
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].files[0]);
    uploadFile(e.target[0].files[0], vehicle.uid, "image");
  };

  return (
    <Paper>
      <Container>
        <Typography component="div" variant="h5">
          Upload an image of your {vehicle.model}
        </Typography>
        <form onSubmit={handleSubmit}>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
      </Container>
    </Paper>
  );
}
