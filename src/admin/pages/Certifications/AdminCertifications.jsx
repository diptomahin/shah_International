import { useEffect, useState } from "react";

const AdminCertifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)
      .then((res) => res.json())
      .then((data) => setCerts(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/certifications/${id}`, {
      method: "DELETE",
    });
    setCerts(certs.filter((c) => c._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Certifications</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((cert) => (
          <div key={cert._id} className="border p-3 rounded shadow">
            <img src={cert.image} className="w-full h-40 object-cover" />
            <p className="mt-2 font-medium">{cert.title}</p>

            <button
              onClick={() => handleDelete(cert._id)}
              className="mt-3 w-full bg-red-500 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCertifications;
