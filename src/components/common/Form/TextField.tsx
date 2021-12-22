import React from "react";

const TextField = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
}: {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  error: string;
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className="form-control"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextField;
