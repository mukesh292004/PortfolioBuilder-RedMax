import React from 'react';
import bgImage from '../../public/assets/bg.jpg';

const Contact = ({ user }) => {
  return (
    <div id='contact' className="h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center w-full max-w-screen-lg px-4 py-8">
        <h1 className="text-3xl font-bold text-red-600 mb-10">Contact Me</h1>
        
        <section id="contact" className="mb-20 sm:mb-28 w-full sm:w-[min(100%,38rem)] text-center">
          <p className="text-gray-700 -mt-6">Please contact me directly at{' '}
            <a className="underline" href="mailto:mukeshnkl2004@gmail.com">mukeshnkl2004@gmail.com</a> or through this form.
          </p>
          <form className="mt-10 flex flex-col">
            <input className="h-14 px-4 mb-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-black dark:text-white dark:focus:bg-opacity-100 focus:outline-none transition-all" type="email" required="" maxLength="500" placeholder="Your email" name="senderEmail" />
            <textarea className="h-52 px-4 py-3 mb-3 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-black dark:text-white dark:focus:bg-opacity-100 focus:outline-none transition-all" name="message" placeholder="Your message" required="" maxLength="5000" />
            <button type="submit" className=" dark:bg-gray-800 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  dark:text-white  dark:hover:bg-opacity-20 dark:active:bg-opacity-30 disabled:scale-100 disabled:bg-opacity-65">
              Submit
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
