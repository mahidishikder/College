"use client";
import React, { useState } from "react";

const AddCollege = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    admissionDates: "",
    events: "",
    researchHistory: "",
    sports: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/addCollege", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert("College added successfully!");
      setFormData({
        name: "",
        image: "",
        admissionDates: "",
        events: "",
        researchHistory: "",
        sports: "",
        rating: "",
      });
    } else {
      alert(result.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add College</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="name"
          placeholder="College Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="image"
          placeholder="College Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="admissionDates"
          placeholder="Admission Dates"
          value={formData.admissionDates}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="events"
          placeholder="Events"
          value={formData.events}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="researchHistory"
          placeholder="Research History"
          value={formData.researchHistory}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="sports"
          placeholder="Sports"
          value={formData.sports}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />
        <button
          type="submit"
          className="w-full bg-[#3DB371] hover:bg-[#3db370c4] text-white py-2 px-4 rounded"
        >
          Add College
        </button>
      </form>
    </div>
  );
};

export default AddCollege;
