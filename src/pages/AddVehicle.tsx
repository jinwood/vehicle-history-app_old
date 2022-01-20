import AddVehicle from "../components/common/Form/AddVehicle";
import { Vehicle } from "../store/vehicle";

const NewUser = () => {
  const handleAction = (vehicle: Vehicle) => {
    console.log("handleAction", vehicle);
  };
  return (
    <div>
      <AddVehicle handleAction={(vehicle: Vehicle) => handleAction(vehicle)} />
    </div>
  );
};

export default NewUser;
