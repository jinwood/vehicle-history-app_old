import React from "react";

const Button = ({
  label,
  handleAction,
}: {
  label: string;
  handleAction: any;
}) => {
  return (
    <button
      onClick={handleAction}
      className="rounded-full bg-blue-700 w-20 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
