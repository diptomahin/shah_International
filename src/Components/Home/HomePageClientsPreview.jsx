import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePageClientsPreview = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Error loading clients:", err));
  }, []);

  // Categories to display
  const allowedCategories = ["GARMENTS", "CONSTRUCTION", "FOOD"];

  // Group clients by category
  const grouped = clients.reduce((acc, client) => {
    const cat = (client.category || "OTHERS").toUpperCase();
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(client);
    return acc;
  }, {});

  return (
    <div className="py-12 bg-gray-50 border-x-2 border-y-2 border-[#2d3190] mx-auto">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-[#2d3190] mb-10">
          Our Trusted Clients
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {allowedCategories.map((category) => {
            const items = grouped[category] || [];

            return (
              <div
                key={category}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-[#2d3190] mb-4">
                  {category}
                </h3>

                {items.length > 0 ? (
                  <div className="space-y-3">
                    {items.slice(0, 6).map((c) => (
                      <div
                        key={c._id?.$oid || c.id}
                        className="p-3 bg-gray-50 border rounded-md hover:bg-gray-100 transition"
                      >
                        <p className="text-gray-800 font-semibold">{c.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No companies found.</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/clients"
            className="px-6 py-3 bg-[#2d3190] text-white rounded-lg font-semibold hover:bg-[#22266f] transition"
          >
            View All Companies →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageClientsPreview;
