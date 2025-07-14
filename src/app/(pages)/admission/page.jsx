"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

function Admission() {
  const { user, isSignedIn } = useUser();

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
    imageUrl: "",
  });

  // ইউজার লগইন থাকলে ইমেইল ফিল্ডে সেট করবো
  useEffect(() => {
    if (isSignedIn && user?.emailAddresses?.length > 0) {
      setFormData((prev) => ({
        ...prev,
        email: user.emailAddresses[0].emailAddress,
      }));
    }
  }, [isSignedIn, user]);

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "imageUrl") {
      setFormData({ ...formData, imageUrl: value });
      setPreview(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const payload = {
        name: formData.name,
        subject: formData.subject,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        dob: formData.dob,
        imageUrl: formData.imageUrl,
      };

      const response = await fetch("/api/addAdmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Admission submitted successfully!");
        setFormData({
          name: "",
          subject: "",
          email: isSignedIn && user?.emailAddresses?.length > 0 ? user.emailAddresses[0].emailAddress : "",
          phone: "",
          address: "",
          dob: getTodayDate(),
          imageUrl: "",
        });
        setPreview(null);
      } else {
        setMessage("Submission failed. Try again!");
      }
    } catch (error) {
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-2 text-center text-[#3DB371]">
        Apply for Admission
      </h2>

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
          readOnly={isSignedIn} // লগইন করলে ইমেইল ফিল্ড readonly হবে
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

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3DB371]"
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
