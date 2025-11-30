import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePageClientsPreview = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Error loading clients:", err));
  }, []);

  const preview = clients.slice(0, 6);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2d3190] mb-6">
          Our Trusted Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((c) => (
            <div key={c._id.$oid} className="p-5 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-gray-800">{c.name}</h3>
              <p className="text-sm text-gray-500 capitalize">
                {c.category}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/clients"
            className="px-6 py-3 bg-[#2d3190] text-white rounded-lg font-semibold hover:bg-[#22266f]"
          >
            View All Companies →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageClientsPreview;
