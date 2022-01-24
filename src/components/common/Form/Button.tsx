import React from "react";

interface Props {
  label: string;
  className?: string;
  handleAction?: any;
  type: "submit" | "reset" | "button";
  size?: "small" | "medium" | "large";
}

const Button = ({
  label,
  className,
  handleAction,
  type = "button",
  size = "medium",
}: Props) => {
  let buttonClasses;
  switch (size) {
    case "small":
      buttonClasses =
        "md:w-1 bg-blue-600 text-white font-bold py-1 px-1 text-xs border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full ";
      break;
    case "medium":
    case "large":
      buttonClasses =
        "md:w-full bg-blue-600 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full ";
      break;
  }

  const classes = `${buttonClasses} ${className}`;

  return (
    <button onClick={handleAction} className={classes} type={type}>
      {label}
    </button>
  );
};

export default Button;
