import { useEffect, useState } from "react";

const categories = [
  "all",
  "garments",
  "construction",
  "food",
  "restaurant",
  "furniture",
  "engineering",
  "medical",
  "hotel"
];

const ClientsFullPage = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Error loading clients:", err));
  }, []);

  const filtered =
    filter === "all"
      ? clients
      : clients.filter((c) => c.category === filter);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#2d3190] mb-8">
        All Partner Companies
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg border ${
              filter === cat
                ? "bg-[#2d3190] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <div key={c._id.$oid} className="p-5 bg-white rounded-lg shadow">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{c.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsFullPage;
