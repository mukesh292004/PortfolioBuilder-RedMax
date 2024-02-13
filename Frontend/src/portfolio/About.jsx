import React from 'react'

const About = ({user}) => {
  return (
       
    <div id='about' className='w-full h-screen flex justify-center'>
    <div className=' md:flex-row flex flex-col justify-center items-center h-screen '>
      <img className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover mb-3 rounded-full shadow-lg" src="https://4kwallpapers.com/images/walls/thumbs_3t/84.jpg" alt="Bonnie image" />
      <div className='md:max-w-[50rem] max-w-[25rem] p-8 space-y-6'>
        <h1 className="text-4xl font-bold mb-4 text-red-600 text-center">About Me</h1>
        <p className="text-lg md:text-2xl text-slate-950 text-center">{user.description}</p>
      </div>
    </div>
  </div>
  )
}

export default About