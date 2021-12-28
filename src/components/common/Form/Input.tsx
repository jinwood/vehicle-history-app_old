const Input = ({
  label,
  name,
  register,
  errors,
  ...rest
}: {
  label?: string;
  name?: string;
  register?: any;
  errors?: any;
  rest?: any;
}) => {
  return (
    <input className="rounded-full" name={name} ref={register} {...rest} />
  );
};

export default Input;
