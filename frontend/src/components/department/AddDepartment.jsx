import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      console.log(error);
      if (error.response && !error.response.data.success)
        alert(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="max-w-3xl bg-white p-8 rounded mt-10 mx-auto rounded-md shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6"> Add Department </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="department"
              className="text-sm font-medium text-gray-700"
            >
              {" "}
              Department Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Department"
              name="dep_name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter Department Description"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows="4"
            />
          </div>
          <button className="bg-teal-600 text-white w-full mt-3 p-2 rounded-md">
            Add Department
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
