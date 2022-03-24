import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function Gallery() {
  const navigate = useNavigate();
  return (
    <Paper sx={{ p: 2 }}>
      <Box>
        <Typography component="div" variant="body1">
          You don't currently have any images.{" "}
          <Link onClick={() => navigate("/vehicle-images")}> Add one?</Link>
        </Typography>
      </Box>
    </Paper>
  );
}
