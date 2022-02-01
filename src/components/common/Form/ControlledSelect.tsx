import { MenuItem } from "@mui/material";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";

interface Props extends FormControlProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: any;
  values?: any[];
}

export default function ControlledSelect({
  name,
  label,
  control,
  values,
  defaultValue,
  ...props
}: Props) {
  const generateSelectOptions = (): ReactNode[] => {
    if (!values) {
      return [];
    }
    return values.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      );
    });
  };

  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSelectOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
}
