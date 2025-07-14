import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://bizenglish.adaderana.lk/wp-content/uploads/The-NSBM-Green-University-T-1.jpg)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center px-4">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to BD University
          </h1>
          <p className="mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
            Empowering students with quality education and innovative research.
            Join us to unlock your potential and build a brighter future.
          </p>
          <Link href="/college">
            <button className="btn bg-[#239954] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base md:text-lg">
              Explore College
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
