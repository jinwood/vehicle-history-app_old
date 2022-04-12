import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { uploadFile } from "../../../api/media";
import { selectVehicle } from "../../../store/slices/vehicleSlice";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file || !vehicle) return;
    uploadFile(file, vehicle.vehicleId, "image");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Upload an image of your {vehicle?.model}</DialogTitle>
      <Container sx={{ p: 2 }}>
        <Typography component="div" variant="h5"></Typography>
        <form onSubmit={onSubmit}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" multiple type="file" />
            <Button
              variant="contained"
              component="span"
              disabled={!file}
              onClick={onSubmit}
            >
              Upload
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={(e) =>
                setFile(e?.target?.files ? e.target.files[0] : null)
              }
            />
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
              endIcon={<PhotoCamera />}
            >
              {file ? file.name : "Choose Image"}
            </Button>
          </label>
        </form>
      </Container>
    </Dialog>
  );
}
