import AddVehicle from "../components/common/Form/AddVehicle";
import { Vehicle } from "../store/vehicle";

const NewUser = () => {
  const handleAction = (event: Event, data: Vehicle) => {
    event.preventDefault();
    console.log("handleAction", data);
  };
  return (
    <div>
      <AddVehicle
        handleAction={(e: Event, data: Vehicle) => handleAction(e, data)}
      />
    </div>
  );
};

export default NewUser;
