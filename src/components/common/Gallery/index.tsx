import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddImageDialog from "./AddImageDialog";

export function Gallery() {
  const [addImageOpen, setAddImageOpen] = useState(false);
  const onClose = () => setAddImageOpen(false);
  return (
    <Paper sx={{ p: 2 }}>
      <Box>
        <Typography component="div" variant="body1">
          You don't currently have any images.{" "}
          <Link onClick={() => setAddImageOpen(!addImageOpen)}> Add one?</Link>
          <AddImageDialog open={addImageOpen} onClose={onClose} />
        </Typography>
      </Box>
    </Paper>
  );
}
