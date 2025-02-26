import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper.jsx";
const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [deploading, setDeploading] = useState(false);
  useEffect(() => {
    const fetchDepartments = async () => {
      setDeploading(true);
      try {
        const response = await axios.get(
          "http://localhost:5001/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          let sno = 1;
          const data = await response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            action: <DepartmentButtons id={dep._id} />,
          }));
          setDepartments(data);
        }
      } catch (error) {
        console.log(error);
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDeploading(false);
      }
    };

    fetchDepartments();
  }, []);
  return (
    <>
      {deploading ? (
        <div>Loading...</div>
      ) : (
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
          <div className="mt-5">
            <DataTable columns={columns} data={departments} />
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default DepartmentList;
