import { useEffect, useState } from "react";

const AdminClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/clients/${id}`, { method: "DELETE" });
    setClients(clients.filter((c) => c._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Clients</h1>

      <table className="w-full border">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-2 text-left">Logo</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr key={client._id} className="border-b">
              <td className="p-2">
                <img src={client.logo} className="w-16 h-16 object-contain" />
              </td>
              <td className="p-2">{client.name}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => handleDelete(client._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
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
};

export default AdminClients;