import React from "react";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center text-white px-5 h-12 bg-teal-600">
      <p className="text-2xl"> welcome {user.name}</p>
      <button className="bg-teal-700 px-4 py-1 hover:bg-teal-900 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
