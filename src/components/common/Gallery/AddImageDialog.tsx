import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { uploadFile } from "../../../api/media";
import { selectVehicle } from "../../../store/slices/vehicleSlice";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Input = styled("input")({
  display: "none",
});

export default function VehicleImages(props: Props) {
  const { open, onClose } = props;
  const vehicleState = useSelector(selectVehicle);
  const { vehicle } = vehicleState;
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].files[0]);
    uploadFile(e.target[0].files[0], vehicle.uid, "image");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload an image of your {vehicle.model}</DialogTitle>
      <Container sx={{ p: 2 }}>
        <Typography component="div" variant="h5"></Typography>
        <form onSubmit={handleSubmit}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" multiple type="file" />
            <Button variant="contained" component="span" disabled={!file}>
              Upload
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
              endIcon={<PhotoCamera />}
            >
              Choose Image
            </Button>
          </label>
        </form>
      </Container>
    </Dialog>
  );
}
