import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../../config";
import Button from "./Button";

interface Values {
  email: string;
  password: string;
}

const AuthForm = ({
  handleAction,
  loading,
}: {
  handleAction: (formData: Values) => void;
  loading: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData: Values) => {
    handleAction(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col place-content-evenly items-center h-40 "
      >
        <div className="form-group flex content-around w-9/12 justify-between">
          <label htmlFor="email">Email</label>
          <input
            value="foo@bar.com"
            {...register("email", { required: true, pattern: emailRegex })}
          />
        </div>

        <div className="form-group flex content-around w-9/12 justify-between">
          <label htmlFor="password">Password</label>
          <input
            value="password"
            {...register("password", { required: true })}
          />
        </div>

        {errors.email && <span>This field is required</span>}

        <Button label={loading ? "..." : "Login"} handleAction={handleAction} />
      </form>
    </>
  );
};

export default AuthForm;
