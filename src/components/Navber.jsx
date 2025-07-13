import Link from 'next/link'
import React from 'react'

function Navber() {

  const NavMenu = <>
  <li><Link href={`/`}>Home</Link> </li>
  <li><Link href='/gallery'>Gallery</Link> </li>
  <li><Link href={`/college`}>College</Link> </li>
  <li><Link href={`/myCollege`}>My College</Link> </li>
  <li><Link href={`/about`}>About</Link> </li>
  <li><Link href={`/contact`}>Contact</Link> </li>

  </>
  return (
    <div className="navbar bg-green-50 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu gap-5 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {NavMenu}
        </ul>
      </div>
      <a className="btn btn-ghost  text-[#009666] font-bold text-2xl">University <span className='bg-red-500 p-1 text-white'>Hub</span></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-5">
        {NavMenu}
      </ul>
    </div>
    <div className="navbar-end">
      <Link className='btn bg-[#239954] text-white hover:text-white/70 font-medium hover:bg-[#3CB371]' href='signin'>Sign In</Link>
    </div>
  </div>
  )
}

export default Navber