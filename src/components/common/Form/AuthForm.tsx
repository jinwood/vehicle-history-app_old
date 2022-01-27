import { Box, Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../../config";
import { AuthType, Credentials } from "../../../types";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  type: AuthType;
  handleAction: (values: Credentials) => void;
  loading: boolean;
}

const AuthForm = ({ handleAction, loading, type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const buttonText = type === AuthType.LOGIN ? "Sign In" : "Register";

  const onSubmit = (formData: Credentials) => {
    if (!formData.email || !formData.password) {
      return;
    }
    handleAction(formData);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <div>
          <TextField
            label="Email"
            type="email"
            value="foo@bar.com"
            margin="normal"
            required
            fullWidth
            {...register("email", { required: true, pattern: emailRegex })}
          />
        </div>

        <div>
          <TextField
            label="Password"
            type="password"
            value="password"
            margin="normal"
            required
            fullWidth
            {...register("password", { required: true })}
          />
        </div>

        {errors.email && <span>This field is required</span>}

        <LoadingButton variant="contained" type="submit" loading={loading}>
          {buttonText}
        </LoadingButton>
      </Box>
    </>
  );
};

export default AuthForm;
