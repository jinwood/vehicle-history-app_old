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
    <>
      <input className="rounded-full" name={name} {...rest} />
    </>
  );
};

export default Input;
