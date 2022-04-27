import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddVehicle from "../components/common/Form/AddVehicle";
import PageContent from "../components/common/PageContent";
import useGetVehicle, { useAddVehicle } from "../hooks/vehicles";
import { selectUser } from "../store/slices/userSlice";
import { Vehicle } from "../types";

export default function NewUser() {
  const user = useSelector(selectUser);
  const { uid } = user;
  const { execute } = useGetVehicle();
  const { error, loading, addVehicle } = useAddVehicle();
  const navigate = useNavigate();
  const handleAction = (vehicle: Vehicle) => {
    addVehicle(String(uid), vehicle).then((result) => {
      if (result) {
        execute(String(uid)).then(() => {
          navigate("/");
        });
      }
    });
  };
  return (
    <div>
      <PageContent>
        <Typography variant="h6">
          You don't have a vehicle. Let's add one
        </Typography>

        <AddVehicle
          error={error}
          loading={loading}
          handleAction={(vehicle: Vehicle) => handleAction(vehicle)}
        />
      </PageContent>
    </div>
  );
}
