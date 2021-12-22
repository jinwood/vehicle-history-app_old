import React from "react";

const NoUser = () => {
  return (
    <div>
      <p className="mb-2">You're not currently logged in.</p>
      <div className="flex align-middle justify-start space-x-2">
        <button className="bg-blue-700 rounded-full text-white w-20">
          <a href="/login">Login</a>
        </button>

        <button className="bg-blue-700 rounded-full text-white w-20">
          <a href="/register">Register</a>
        </button>
      </div>
    </div>
  );
};

export default NoUser;
