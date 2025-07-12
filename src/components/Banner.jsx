import React from 'react'

function Banner() {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://bizenglish.adaderana.lk/wp-content/uploads/The-NSBM-Green-University-T-1.jpg)",
    }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn bg-[#239954] text-white">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Banner