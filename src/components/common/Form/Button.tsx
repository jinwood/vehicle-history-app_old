import React from "react";

const Button = ({
  label,
  handleAction,
  className,
}: {
  label: string;
  className?: string;
  handleAction: any;
}) => {
  return (
    <button
      onClick={handleAction}
      className={"rounded-full bg-blue-700 w-auto p-2 text-white " + className}
    >
      {label}
    </button>
  );
};

export default Button;
