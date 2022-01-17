import React from "react";

interface Props {
  label: string;
  className?: string;
  handleAction?: (data: any) => void;
  type: "submit" | "reset" | "button";
}

const Button = ({ label, className, handleAction, type = "button" }: Props) => {
  return (
    <button
      onClick={handleAction}
      className={
        "md:w-full bg-blue-600 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full " +
        className
      }
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
