import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row  flex-wrap  py-4 flex-grow h-full">
        <main role="main" className="w-full flex-grow pt-1 px-3 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
