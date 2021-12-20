import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav";

const AdminDashboardPage = () => {
  return (
    <>
      <AdminNav />
      <AdminDashboard />
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
