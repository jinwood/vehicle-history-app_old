import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectProps } from "@mui/material/Select";
import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";

interface Props extends SelectProps {
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
  const { fullWidth } = props;
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={() => (
          <Select labelId={labelId} label={label} defaultValue={defaultValue}>
            {children}
          </Select>
        )}
        name={name}
        control={control}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
