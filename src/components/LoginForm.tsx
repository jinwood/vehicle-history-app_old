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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input {...register("password")} />
      </div>

      {errors.email && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
