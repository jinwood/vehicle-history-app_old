import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FuelType, VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import Button from "./Button";
import Group from "./Group";
import Input from "./Input";

function AddVehicle({
  handleAction,
}: {
  handleAction: (formData: Vehicle) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ref = useRef(null);
  return (
    <div>
      <h1>Add Vehicle</h1>
      <form className="flex flex-col place-content-evenly items-center">
        <Group>
          <label htmlFor="manufacturer">Manufacturer</label>
          <select
            className="rounded-full bg-white"
            {...register("manufacturer", { required: true })}
            ref={ref}
          >
            {Object.keys(VehicleManufacturer).map((key: any) => (
              <option key={key} value={key}>
                {VehicleManufacturer[key as keyof typeof VehicleManufacturer]}
              </option>
            ))}
          </select>
        </Group>
        <Group>
          <label htmlFor="model">Model</label>
          <Input {...register("model", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="year">Year</label>
          <Input {...register("year", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="engineSize">Engine Size</label>
          <Input {...register("engineSize", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            className="rounded-full bg-white"
            {...register("fuelType", { required: true })}
            ref={ref}
          >
            {Object.keys(FuelType).map((key: any) => (
              <option key={key} value={key}>
                {FuelType[key as keyof typeof FuelType]}
              </option>
            ))}
          </select>
        </Group>
        <Group>
          <label htmlFor="purchasePrice">Purchase Price</label>
          <Input {...register("purchasePrice", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="purchaseDate">Purchase Date</label>
          <Input {...register("purchaseDate", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="mileage">Mileage</label>
          <Input {...register("mileage", { required: true })} />
        </Group>
        <Group>
          <label htmlFor="notes">Notes</label>
          <Input {...register("notes")} />
        </Group>
        <Button
          className="mt-3"
          label="Add Vehicle"
          handleAction={handleAction}
        />
      </form>
    </div>
  );
}

export default AddVehicle;
