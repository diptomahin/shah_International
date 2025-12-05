import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminSubsidiaries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/subsidiaries`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Subsidiaries</h2>

        <Link
          to="/admin/subsidiaries/create"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Subsidiary
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Country</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.country}</td>
              <td className="p-3 border space-x-3">
                <Link
                  to={`/admin/subsidiaries/edit/${item._id}`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <button
                  className="text-red-600"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    if (!confirm("Are you sure?")) return;

    fetch(`/api/subsidiaries/${id}`, { method: "DELETE" })
      .then(() => setData(data.filter((d) => d._id !== id)));
  }
};

export default AdminSubsidiaries;
