//https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-form-using-tailwindcss--cms-34128
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { FuelType, VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import Button from "./Button";
import Group from "./Group";

function AddVehicle({
  handleAction,
}: {
  handleAction: (data: Vehicle) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<Vehicle>();
  const ref = useRef(null);

  const onSubmit = (vehicle: Vehicle) => {
    handleAction(vehicle);
  };

  const inputClasses =
    "px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center";
  const labelClasses =
    "uppercase tracking-wide text-black text-xs font-bold mb-2";
  const selectClasses =
    "w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded";
  console.log(errors);

  return (
    <div>
      <form className="px-12 pb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-3 md:flex mb-6">
          <Group halfWidth>
            <label htmlFor="manufacturer" className={labelClasses}>
              Manufacturer
            </label>

            <select
              className={selectClasses}
              {...register("manufacturer", { required: true })}
            >
              {Object.keys(VehicleManufacturer).map((key: any) => (
                <option key={key} value={key}>
                  {VehicleManufacturer[key as keyof typeof VehicleManufacturer]}
                </option>
              ))}
            </select>
            {errors.manufacturer && <span>This field is required</span>}
          </Group>
          <Group halfWidth>
            <label htmlFor="model" className={labelClasses}>
              Model
            </label>
            <input
              className={inputClasses}
              {...register("model", { required: true, value: "M235i" })}
            />
            {errors.model && <span>This field is required</span>}
          </Group>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <Group halfWidth>
            <label htmlFor="year" className={labelClasses}>
              Year
            </label>
            <input
              className={inputClasses}
              {...register("year", { required: true, value: 2015 })}
            />
            {errors.year && <span>This field is required</span>}
          </Group>
          <Group halfWidth>
            <label htmlFor="engineSize" className={labelClasses}>
              Engine Size
            </label>
            <input
              className={inputClasses}
              {...register("engineSize", { required: true, value: 3000 })}
            />
            {errors.engineSize && <span>This field is required</span>}
          </Group>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <Group halfWidth>
            <label htmlFor="fuelType" className={labelClasses}>
              Fuel Type
            </label>
            <select
              className={selectClasses}
              {...register("fuelType", { required: true })}
            >
              {Object.keys(FuelType).map((key: any) => (
                <option key={key} value={key}>
                  {FuelType[key as keyof typeof FuelType]}
                </option>
              ))}
            </select>
            {errors.fuelType && <span>This field is required</span>}
          </Group>
          <Group halfWidth>
            <label htmlFor="purchasePrice" className={labelClasses}>
              Purchase Price
            </label>
            <input
              className={inputClasses}
              {...register("purchasePrice", { required: true, value: 3000 })}
            />
            {errors.purchasePrice && <span>This field is required</span>}
          </Group>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <Group halfWidth>
            <label htmlFor="purchaseDate" className={labelClasses}>
              Purchase Date
            </label>
            <input
              type={"date"}
              className={inputClasses}
              {...register("purchaseDate", {
                required: true,
                value: new Date("01/06/2020"),
              })}
            />
            {errors.purchaseDate && <span>This field is required</span>}
          </Group>
          <Group halfWidth>
            <label htmlFor="mileage" className={labelClasses}>
              Mileage
            </label>
            <input
              className={inputClasses}
              {...register("mileage", { required: true, value: 3000 })}
            />
            {errors.mileage && <span>This field is required</span>}
          </Group>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <Group>
            <label htmlFor="notes" className={labelClasses}>
              Notes
            </label>
            <input className={inputClasses} {...register("notes")} />
          </Group>
        </div>
        <Button className="mt-3" label="Add Vehicle" type="submit" />
      </form>
    </div>
  );
}

export default AddVehicle;
