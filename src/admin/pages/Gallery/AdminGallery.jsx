import { useEffect, useState } from "react";

const AdminGallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gallery`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, { method: "DELETE" });
    setItems(items.filter((i) => i._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Gallery Management</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g._id} className="border p-2 rounded shadow">
            <img src={g.image} className="w-full h-32 object-cover rounded" />
            <button
              onClick={() => handleDelete(g._id)}
              className="mt-2 w-full bg-red-500 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
