import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Vehicle } from "../../store/vehicle";

export default function MyVehicle({ vehicle }: { vehicle: Vehicle }) {
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
          <Container sx={{ pt: 2, pb: 1 }}>
            <Typography component="div" variant="h6">
              {vehicle.manufacturer} {vehicle.model}
            </Typography>
          </Container>
        </Paper>
      </Box>
    </>
  );
}
