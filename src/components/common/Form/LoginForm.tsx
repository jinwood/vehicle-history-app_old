import React from "react";
import { useForm } from "react-hook-form";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col place-content-evenly items-center  h-40 "
    >
      <div className="form-group flex content-around w-9/12 justify-between">
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
      </div>

      <div className="form-group flex content-around w-9/12 justify-between">
        <label htmlFor="password">Password</label>
        <input {...register("password")} />
      </div>

      {errors.email && <span>This field is required</span>}

      <input
        type="submit"
        className="rounded-full bg-blue-700 w-20 text-white"
        value="Submit"
      />
    </form>
  );
};

export default LoginForm;
