//https://webdesign.tutsplus.com/tutorials/how-to-create-a-responsive-form-using-tailwindcss--cms-34128
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FuelType, VehicleManufacturer } from "../../../config";
import { Vehicle } from "../../../store/vehicle";
import Button from "./Button";
import Group from "./Group";

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

  const inputClasses =
    "px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center";
  const labelClasses =
    "uppercase tracking-wide text-black text-xs font-bold mb-2";
  const selectClasses =
    "w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded";

  return (
    <div>
      <h1>Add Vehicle</h1>
      <form className="px-12 pb-10">
        <div className="-mx-3 md:flex mb-6">
          <Group halfWidth>
            <label htmlFor="manufacturer" className={labelClasses}>
              Manufacturer
            </label>
            <select
              className={selectClasses}
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
          <Group halfWidth>
            <label htmlFor="model" className={labelClasses}>
              Model
            </label>
            <input
              className={inputClasses}
              {...register("model", { required: true })}
            />
          </Group>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <Group>
            <label htmlFor="year" className={labelClasses}>
              Year
            </label>
            <input
              className={inputClasses}
              {...register("year", { required: true })}
            />
          </Group>
        </div>
        <Group>
          <label htmlFor="engineSize" className={labelClasses}>
            Engine Size
          </label>
          <input
            className={inputClasses}
            {...register("engineSize", { required: true })}
          />
        </Group>
        <Group>
          <label htmlFor="fuelType" className={labelClasses}>
            Fuel Type
          </label>
          <select
            className={selectClasses}
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
          <label htmlFor="purchasePrice" className={labelClasses}>
            Purchase Price
          </label>
          <input
            className={inputClasses}
            {...register("purchasePrice", { required: true })}
          />
        </Group>
        <Group>
          <label htmlFor="purchaseDate" className={labelClasses}>
            Purchase Date
          </label>
          <input
            className={inputClasses}
            {...register("purchaseDate", { required: true })}
          />
        </Group>
        <Group>
          <label htmlFor="mileage" className={labelClasses}>
            Mileage
          </label>
          <input
            className={inputClasses}
            {...register("mileage", { required: true })}
          />
        </Group>
        <Group>
          <label htmlFor="notes" className={labelClasses}>
            Notes
          </label>
          <input className={inputClasses} {...register("notes")} />
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
