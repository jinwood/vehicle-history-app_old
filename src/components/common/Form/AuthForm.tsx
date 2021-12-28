import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../../config";
import Button from "./Button";

interface Values {
  email: string;
  password: string;
}

const AuthForm = ({
  title,
  handleAction,
}: {
  title: string;
  handleAction: (formData: Values) => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData: Values) => {
    handleAction(formData);
  };

  return (
    <>
      <h1>{title}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col place-content-evenly items-center  h-40 "
      >
        <div className="form-group flex content-around w-9/12 justify-between">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true, pattern: emailRegex })}
          />
        </div>

        <div className="form-group flex content-around w-9/12 justify-between">
          <label htmlFor="password">Password</label>
          <input {...register("password", { required: true })} />
        </div>

        {errors.email && <span>This field is required</span>}

        <Button label={title} handleAction={handleAction} />
      </form>
    </>
  );
};

export default AuthForm;
