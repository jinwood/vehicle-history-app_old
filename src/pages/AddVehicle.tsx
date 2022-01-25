import AddVehicle from "../components/common/Form/AddVehicle";
import { Vehicle, createVehicle } from "../store/vehicle";

export default function NewUser() {
  const handleAction = (vehicle: Vehicle) => {
    createVehicle(vehicle).then((vehicleId) => {
      console.log("vehicleId", vehicleId);
    });
  };
  return (
    <div>
      <AddVehicle handleAction={(vehicle: Vehicle) => handleAction(vehicle)} />
    </div>
  );
}
