import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCogs,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="left-0 top-0 bottom-0 fixed bg-gray-800 w-64 space-y-2 h-screen text-white">
      <div className="bg-teal-600 flex  h-12 items-center justify-center">
        <h2 className="text-center text-2xl">Employee MS</h2>
      </div>
      <div>
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) => `${isActive ? "bg-teal-500" : ""}
            flex items-center space-x-4 block py-2.5 mx-3 px-4 rounded `}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded "
        >
          <FaUsers />
          <span>Employee</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded "
        >
          <FaBuilding />
          <span>Department</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded "
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded "
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded "
        >
          <FaCogs />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
