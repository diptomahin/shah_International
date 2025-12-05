import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminEditSubsidiary = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    image: "",
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/subsidiaries/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subsidiaries/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) navigate("/admin/subsidiaries");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Subsidiary</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Country"
          className="w-full border p-2 rounded"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={formData.image}
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Subsidiary
        </button>
      </form>
    </div>
  );
};

export default AdminEditSubsidiary;
