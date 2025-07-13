"use client";

import React, { useEffect, useState } from "react";

const UpcomingDeadlines = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fakeColleges = [
      {
        _id: "1",
        name: "Dhaka University",
        admissionDeadline: "2025-08-10",
        logo: "/logos/du.png",
      },
      {
        _id: "2",
        name: "BUET",
        admissionDeadline: "2025-08-15",
        logo: "/logos/buet.png",
      },
      {
        _id: "3",
        name: "North South University",
        admissionDeadline: "2025-08-20",
        logo: "/logos/nsu.png",
      },
      {
        _id: "4",
        name: "BRAC University",
        admissionDeadline: "2025-08-25",
        logo: "/logos/brac.png",
      },
      {
        _id: "5",
        name: "Jahangirnagar University",
        admissionDeadline: "2025-08-30",
        logo: "/logos/ju.png",
      },
      {
        _id: "6",
        name: "AIUB",
        admissionDeadline: "2025-09-05",
        logo: "/logos/aiub.png",
      },
    ];

    setColleges(fakeColleges);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#3DB371] mb-10">
        📅 Upcoming Admission Deadlines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition duration-300"
          >
            {college.logo && (
              <img
                src={college.logo}
                alt={`${college.name} logo`}
                className="w-16 h-16 mb-4 object-contain"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{college.name}</h3>
            <p className="text-gray-500">
              Deadline:{" "}
              <span className="text-red-600 font-medium">
                {college.admissionDeadline}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingDeadlines;
