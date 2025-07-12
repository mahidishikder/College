'use client'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <p className="text-lg text-gray-700">
          Welcome to <strong>College Booking</strong> – a platform designed to help students find and book services offered by top colleges in Bangladesh.
          Our goal is to make the college admission process smoother, more informative, and accessible for everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-6">🎯 Our Mission</h2>
        <p className="text-gray-700">
          To provide students with reliable college information, admission details, and real-time review features to help them make informed decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6">🌟 Our Vision</h2>
        <p className="text-gray-700">
          To become the most trusted platform for college admissions and reviews in Bangladesh by offering transparent data and user-friendly features.
        </p>

        <div className="pt-4 border-t mt-6">
          <p className="text-sm text-gray-500">
            Website developed by <span className="font-medium">Mahidi Shikder</span> | Powered by MERN Stack & Next.js
          </p>
        </div>
      </div>
    </div>
  )
}
