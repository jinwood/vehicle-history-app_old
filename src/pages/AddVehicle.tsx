import { useNavigate } from "react-router-dom";
import AddVehicle from "../components/common/Form/AddVehicle";
import { useAddVehicle } from "../hooks/vehicles";
import { Vehicle, createVehicle } from "../store/vehicle";

export default function NewUser() {
  const { error, loading, newVehicle } = useAddVehicle();
  const navigate = useNavigate();
  const handleAction = (vehicle: Vehicle) => {
    newVehicle(vehicle).then((result) => {
      if (result) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <AddVehicle
        error={error}
        loading={loading}
        handleAction={(vehicle: Vehicle) => handleAction(vehicle)}
      />
    </div>
  );
}
