import { useNavigate } from "react-router-dom";
import AddVehicle from "../components/common/Form/AddVehicle";
import { useAddVehicle } from "../hooks/vehicles";
import { Vehicle } from "../store/vehicle";

interface Props {
  uid?: string;
}

export default function NewUser({ uid }: Props) {
  const { error, loading, addVehicle } = useAddVehicle();
  const navigate = useNavigate();
  const handleAction = (vehicle: Vehicle) => {
    addVehicle(String(uid), vehicle).then((result) => {
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
