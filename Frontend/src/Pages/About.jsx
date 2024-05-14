import React from 'react'

const About = () => {
    return (
        <div className="px-5 flex items-center text-slate-900   flex-1  bg-white-500'">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to <span className='text-red-500'>RedMax </span></h1>
            <p className="text-xl text-center mb-8">Create stunning portfolios effortlessly!</p>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">How It Works:</h2>
              <p className="text-lg mb-4">1. Input Your Information: Fill out our easy-to-use form with details about yourself, including your education, work experience, skills, projects, and more.</p>
              <p className="text-lg mb-4">2. Preview and Customize: See a preview of your portfolio and customize it further to make it truly yours. Add your personal touch with custom colors, fonts, and layouts.</p>
              <p className="text-lg mb-4">3. Download or Share: Once you're satisfied with your portfolio, download it as a PDF or share it directly with others via a unique URL.</p>
              <h2 className="text-3xl font-bold mb-4">Why Choose Us:</h2>
              <p className="text-lg mb-4">- User-Friendly Interface: Our intuitive interface makes it easy for anyone to create a professional portfolio, regardless of technical expertise.</p>
              <p className="text-lg mb-4">- Customization Options: Tailor your portfolio to match your personal brand and stand out from the crowd.</p>
              <p className="text-lg mb-4">- Accessibility: Access your portfolio anytime, anywhere, and share it effortlessly with potential employers, clients, or collaborators.</p>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">Sign Up Now</button>
            </div>
          </div>
        </div>
      );
}

export default About