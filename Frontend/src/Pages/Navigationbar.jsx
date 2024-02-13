import React from 'react'
import { Link } from 'react-router-dom'

const Navigationbar = () => {
  return (
      <nav className='max-md:justify-center  items-center  flex
      bg-zinc-950 text-white  py-5 justify-between '>
        <div className='font-mono font-bold  text-red-500 text-3xl'>RedMax </div>
        <ul className=' max-md:hidden flex space-x-20 text-[20px] mx-10 '>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
        </ul>
      </nav>
  )
}

export default Navigationbar