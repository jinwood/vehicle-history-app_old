import React from "react";

const Form = ({ children }: { children: React.ReactNode }) => {
  return <form className="flex items-center space-x-6">{children}</form>;
};

export default Form;
