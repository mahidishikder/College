"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const params = useParams();
  const id = params?.id;

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    imageUrl: "",
  });

  const [preview, setPreview] = useState(null);
  const [collegeName, setCollegeName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch admission data by id
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch("/api/admission");
        const data = await res.json();

        const matched = data.find((item) => item._id === id);

        if (matched) {
          setFormData({
            name: matched.name || "",
            subject: matched.subject || "",
            email: matched.email || "",
            phone: matched.phone || "",
            address: matched.address || "",
            dob: matched.dob || "",
            imageUrl: matched.imageUrl || "",
          });
          setPreview(matched.imageUrl);
          setCollegeName(matched.collegeName || "");
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "imageUrl") {
      setPreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/updateAdmission", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, ...formData }),
      });

      if (response.ok) {
        setMessage("Updated successfully!");
      } else {
        setMessage("Update failed!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#3DB371]">
        Edit Admission
      </h2>

      {collegeName && (
        <p className="text-center mb-6 text-gray-500">
          College: <span className="font-semibold">{collegeName}</span>
        </p>
      )}

      {message && (
        <p className="text-center mb-4 text-green-600 font-semibold">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Candidate Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Subject</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Law">Law</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Candidate Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Candidate Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-md border mt-2"
          />
        )}

        <button
          type="submit"
          className="w-full bg-[#3DB371] text-white font-bold py-2 px-4 rounded-md"
        >
          Update Admission
        </button>
      </form>
    </div>
  );
}

export default Page;
