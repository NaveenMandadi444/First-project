import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-4 py-1 text-white bg-teal-600"
        onClick={() => navigate(`/admin-dashboard/department/${id}`)}
      >
        Edit
      </button>
      <button className="px-4 py-1 text-white bg-red-500">Delete</button>
    </div>
  );
};
