"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function Admission() {
  const searchParams = useSearchParams();
  const collegeId = searchParams.get("collegeId");
  const collegeName = searchParams.get("collegeName");

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // yyyy-mm-dd
  };

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: getTodayDate(),
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // image preview
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      console.log("Submitted Admission:", {
        ...formData,
        collegeId,
        collegeName,
      });

      setMessage("Admission submitted successfully!");
      setFormData({
        name: "",
        subject: "",
        email: "",
        phone: "",
        address: "",
        dob: getTodayDate(),
        image: null,
      });
      setPreview(null);
    } catch (error) {
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#3DB371]">
        Apply for Admission
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
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />

        {/* Subject Dropdown */}
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
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
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Candidate Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />

        {/* Default Date of Birth */}
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
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
          className="w-full bg-[#3DB371] hover:bg-[#34a763] text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
        >
          Submit Admission
        </button>
      </form>
    </div>
  );
}

export default Admission;
