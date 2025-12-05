import { Outlet } from "react-router";
import AdminSidebar from "../admin/components/AdminSidebar";
import AdminHeader from "../admin/components/AdminHeader";

const AdminRoot = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-6">
        <AdminHeader />
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminRoot;
