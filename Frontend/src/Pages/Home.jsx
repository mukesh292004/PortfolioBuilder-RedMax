import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
    <section className=' px-5 flex items-center   flex-1  bg-white-500 py-24' >
       
      <div className="max-md: max-w-
      xl  max-w-2xl p-8  mx-16
       bg-white shadow-md text-slate-800 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to <span className='text-red-500'>RedMax </span> </h1>
        <p className="text-3xl mt-5 mb-6 ">Create stunning portfolios effortlessly!</p>
        <p className=" leading-loose text-xl mb-6">Are you looking to showcase your skills, projects, and achievements in a professional and visually appealing manner? Look no further! RedMax offers you a seamless platform to generate personalized portfolios that reflect your unique talents and experiences.</p>
        <Link to='/Signin'  className='bg-red-500 text-white px-5 py-2 rounded-lg mt-5'>Get Started</Link>
      </div>
      <div className="max-md:hidden flex-1 h-full ">
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/275095964/original/64612aaf932e2c21708ca51e8b92a88087ebef94/build-photography-and-portfolio-websites.png" alt="Your Image" className="h-full  object-right-top" />
        </div>
        
     

    </section>
    
  </>
  )
}

export default Home