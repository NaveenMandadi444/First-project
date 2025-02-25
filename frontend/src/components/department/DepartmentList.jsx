import React from "react";
import { Link } from "react-router-dom";
const DepartmentList = () => {
  return (
    <div className="p-5">
      <div className="text-center font-bold">
        <h2 className="text-2xl">Manage Department</h2>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="search"
          placeholder="Search Department"
          className="px-4 py-1 border rounded"
        />
        <Link
          to="/admin-dashboard/add-department"
          className="px-4 py-1 rounded bg-teal-600 text-white"
        >
          Add a Department
        </Link>
      </div>
    </div>
  );
};

export default DepartmentList;
