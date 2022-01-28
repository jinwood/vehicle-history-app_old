import FormControl, { FormControlProps } from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectProps } from "@mui/material/Select";
import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";

interface Props extends FormControlProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: any;
  children?: ReactNode;
}

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}: Props) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={() => (
          <Select labelId={labelId} label={label} defaultValue={defaultValue}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
        {...props}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
