import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminCreateSubsidiary = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    country: "",
    description: "",
    image: null,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("country", form.country);
    fd.append("description", form.description);
    fd.append("image", form.image);

    fetch(`${import.meta.env.VITE_API_URL}/api/subsidiaries`, {
      method: "POST",
      body: fd,
    })
      .then(() => navigate("/admin/subsidiaries"));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Name"
        className="input"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Country"
        className="input"
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className="textarea"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        type="file"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
      />

      <button className="btn-primary">Create</button>
    </form>
  );
};

export default AdminCreateSubsidiary;
