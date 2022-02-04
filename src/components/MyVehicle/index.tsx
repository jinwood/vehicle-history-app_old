import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Vehicle } from "../../store/vehicle";

export default function MyVehicle({ vehicle }: { vehicle: Vehicle }) {
  return (
    <>
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            // sx={{ fontSize: 14 }}
            gutterBottom
          >
            Your vehicle
          </Typography>
          <Typography component="div" variant="h6">
            {vehicle.manufacturer} {vehicle.model}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </>
  );
}
