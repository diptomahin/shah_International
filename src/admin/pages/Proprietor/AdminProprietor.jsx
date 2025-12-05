import { useEffect, useState } from "react";

const AdminProprietor = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/proprietor`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  const handleSave = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/proprietor`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    alert("Updated!");
  };

  if (!info) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Proprietor Info</h1>

      <input
        type="text"
        className="w-full border p-2 rounded mb-3"
        placeholder="Name"
        value={info.name}
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />

      <textarea
        className="w-full border p-2 rounded mb-3"
        placeholder="Biography"
        value={info.bio}
        onChange={(e) => setInfo({ ...info, bio: e.target.value })}
      />

      <input
        type="text"
        className="w-full border p-2 rounded mb-3"
        placeholder="Image URL"
        value={info.image}
        onChange={(e) => setInfo({ ...info, image: e.target.value })}
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default AdminProprietor;
