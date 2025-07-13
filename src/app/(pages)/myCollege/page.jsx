"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function MyCollege() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/admission");
      const data = await res.json();
      setApplications(data || []);
      setLoading(false);
    } catch (err) {
      setMessage("Failed to load data.");
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;
  
    fetch(`/api/deleteAdmission/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setApplications((prev) => prev.filter((app) => app._id !== id));
          setMessage("Deleted successfully.");
        } else {
          setMessage("Delete failed.");
        }
      })
      .catch(() => {
        setMessage("Error deleting data.");
      });
  };
  

  return (
    <div className="max-w-6xl mx-auto my-15 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#3DB371]">
        My Applications
      </h2>

      {message && (
        <p className="text-center mb-4 text-red-500 font-semibold">{message}</p>
      )}

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : applications.length === 0 ? (
        <p className="text-center">No application data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">DOB</th>
                <th className="p-2 border">College</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{app.name}</td>
                  <td className="p-2 border">{app.email}</td>
                  <td className="p-2 border">{app.phone}</td>
                  <td className="p-2 border">{app.subject}</td>
                  <td className="p-2 border">{app.dob}</td>
                  <td className="p-2 border">{app.collegeName}</td>
                  <td className="p-2 border flex flex-col gap-1">
                  <Link href={`/myCollege/updateCollege/${app._id}`}>
  <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
    Edit
  </button>
</Link>


                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                      onClick={() => handleDelete(app._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyCollege;
