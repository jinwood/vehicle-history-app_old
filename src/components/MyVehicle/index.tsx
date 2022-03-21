import { getStorage, ref } from "firebase/storage";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useUploadFile } from "react-firebase-hooks/storage";
import { useRef } from "react";
import { Vehicle } from "../../types";

export default function MyVehicle({ vehicle }: { vehicle: Vehicle }) {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const inputFile = useRef<HTMLInputElement | null>(null);

  const openDialog = () => {
    inputFile?.current?.addEventListener("change", onDialogClose, false);
    if (inputFile && inputFile.current) {
      inputFile.current.click();
    }
  };

  const onDialogClose = () => {
    if (inputFile && inputFile.current?.files?.length) {
      const storage = getStorage();
      const storageRef = ref(
        storage,
        "images/" + inputFile.current.files[0].name
      );
      const result = uploadFile(storageRef, inputFile.current.files[0], {
        contentType: "image/jpeg",
      });

      alert(`Result: ${JSON.stringify(result)}`);
    }
  };

  return (
    <>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          mx: "2px",
          transform: "scale(0.8)",
          width: "100%",
        }}
      >
        <Paper>
          <Container disableGutters maxWidth="lg" sx={{ pt: 2, pb: 1, pl: 5 }}>
            <Typography component="div" variant="h5">
              Your vehicle
            </Typography>
          </Container>
          <Typography component="div" variant="h6">
            {vehicle.manufacturer} {vehicle.model}
          </Typography>
        </Paper>
      </Box>
      <input type="file" ref={inputFile} style={{ display: "none" }} />
      {error && <strong>Error: {error.message}</strong>}
      {uploading && <span>Uploading file...</span>}
      {snapshot && <span>Snapshot: {JSON.stringify(snapshot)}</span>}
    </>
  );
}
