import React from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaFileAlt,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaTimesCircle,
  FaUsers,
} from "react-icons/fa";
import SummaryCard from "./SummaryCard";

const AdminSummary = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard
          icon={<FaUsers />}
          text="Total employees"
          number={13}
          color="bg-teal-500"
        />
        <SummaryCard
          icon={<FaBuilding />}
          text="Total Departments"
          number={5}
          color="bg-yellow-500"
        />

        <SummaryCard
          icon={<FaMoneyBillWave />}
          text="Monthly Salary"
          number="$654"
          color="bg-red-500"
        />
      </div>
      <div className="mt-12">
        <h2 className="text-center font-bold text-2xl">Leave Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
          <SummaryCard
            icon={<FaFileAlt />}
            text="Leave Applied"
            number={5}
            color="bg-teal-500"
          />
          <SummaryCard
            icon={<FaCheckCircle />}
            text="Leave Approved"
            number={2}
            color="bg-green-500"
          />
          <SummaryCard
            icon={<FaHourglassHalf />}
            text="Leave Pending"
            number={4}
            color="bg-yellow-500"
          />
          <SummaryCard
            icon={<FaTimesCircle />}
            text="Leave Rejected"
            number={13}
            color="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
