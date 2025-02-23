import React from "react";
import { useAuth } from "../context/authContext";

import Navbar from "../components/sidebar/Navbar";
import AdminSidebar from "../components/sidebar/AdminSidebar.jsx";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex ">
      <AdminSidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
      </div>
    </div>
  );
};

export default AdminDashboard;
