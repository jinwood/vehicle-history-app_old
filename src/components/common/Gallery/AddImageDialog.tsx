import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { uploadFile } from "../../../api/media";
import { selectVehicle } from "../../../store/slices/vehicleSlice";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function VehicleImages(props: Props) {
  const { open, onClose } = props;
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].files[0]);
    uploadFile(e.target[0].files[0], vehicle.uid, "image");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload an image of your {vehicle.model}</DialogTitle>
      <Container>
        <Typography component="div" variant="h5"></Typography>
        <form onSubmit={handleSubmit}>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
      </Container>
    </Dialog>
  );
}
