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
      {/* sticky footer */}
      <footer className="bg-gray-900 text-white p-4 text-center w-full fixed bottom-0">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
