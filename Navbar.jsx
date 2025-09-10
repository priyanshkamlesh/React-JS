import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-around bg-green-500/30'>
        <h1 className=' text-xl text-red-500/70 -ml-10 bg-linear-60 flex items-center justify-around'
        >LoGo</h1>
        <ul className='flex gap-5 p-1'>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          <Link to="/about_us">
            <li>
              About Us
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar