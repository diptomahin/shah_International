import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const links = [
    { name: "Dashboard", to: "/admin" },
    { name: "Subsidiaries", to: "/admin/subsidiaries" },
    { name: "Gallery", to: "/admin/gallery" },
    { name: "Clients", to: "/admin/clients" },
    { name: "Certifications", to: "/admin/certifications" },
    { name: "Proprietor", to: "/admin/proprietor" },
  ];

  return (
    <div className="w-64 bg-[#111827] text-white p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-3 py-2 rounded hover:bg-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
