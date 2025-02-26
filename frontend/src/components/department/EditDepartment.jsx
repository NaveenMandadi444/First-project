import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditDepartment = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState([]);
  const [deploading, setDeploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      setDeploading(true);
      try {
        const response = await axios.get(
          `http://localhost:5001/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setDepartment(response.data.department);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/department/${id}`,
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
    <>
      {deploading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-3xl bg-white p-8 rounded mt-10 mx-auto rounded-md shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6"> Edit Department </h1>
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
                placeholder="Department Name"
                value={department.dep_name}
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
                value={department.description}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <button className="bg-teal-600 text-white w-full mt-3 p-2 rounded-md">
              Edit Department
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditDepartment;
