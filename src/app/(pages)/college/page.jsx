"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function CollegesPage() {
  const { isSignedIn } = useUser(); // Clerk login status
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchColleges() {
      try {
        const res = await fetch("/api/colleges");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        console.log("Fetched colleges data:", data);
        setColleges(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching colleges:", error);
        setColleges([]);
      } finally {
        setLoading(false);
      }
    }

    fetchColleges();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading colleges...</p>;

  if (colleges.length === 0)
    return <p className="text-center mt-10">No colleges found.</p>;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Colleges</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{college.name}</h2>
              <p className="text-gray-600">Rating: ⭐ {college.rating}</p>
              <p className="text-gray-600">
                Admission Date: {college.admissionDates}
              </p>
              <p className="text-gray-600">
                Research Papers: {college.researchHistory}
              </p>

              {/* ✅ Conditional Redirect */}
              <Link href={isSignedIn ? `/college/${college._id}` : "/sign-in"}>
                <button className="mt-3 px-4 py-2 bg-[#239954] text-white rounded hover:bg-[#239954b9]">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
