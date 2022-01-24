import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../../config";
import { AuthType } from "../../../types";
import LoadingSpinner from "../LoadingSpinner";
import Button from "./Button";

interface Values {
  email: string;
  password: string;
}

interface Props {
  type: AuthType;
  handleAction: (values: Values) => void;
  loading: boolean;
}

const AuthForm = ({ handleAction, loading, type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const buttonText = type === AuthType.LOGIN ? "Sign In" : "Register";

  const onSubmit = (formData: Values) => {
    console.log("onSubmit", formData);
    if (!formData.email || !formData.password) {
      return;
    }
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

        {!loading && (
          <Button
            type="submit"
            label={buttonText}
            handleAction={handleAction}
          />
        )}
        {loading && <LoadingSpinner />}
      </form>
    </>
  );
};

export default AuthForm;
