import React, { useState } from 'react';

const Nav = () => {
    const [activeItem, setActiveItem] = useState(null);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setActiveItem(id);
    };

    return (
        <nav className='max-md:justify-center h-20 items-center bg-black flex text-white px-5 justify-between fixed top-0 left-0 w-full z-10'>
            <div className='font-sans font-bold text-red-500 text-3xl'>Portfolio</div>
            <ul className='max-md:hidden flex space-x-20 text-[20px]'>
                <li>
                    <button
                        className={`${activeItem === 'home' ? 'text-red-500' : ''} hover:text-red-500 focus:text-red-500`}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        className={`${activeItem === 'about' ? 'text-red-500' : ''} hover:text-red-500 focus:text-red-500`}
                        onClick={() => scrollToSection('about')}
                    >
                        About Me
                    </button>
                </li>
                <li>
                    <button
                        className={`${activeItem === 'skills' ? 'text-red-500' : ''} hover:text-red-500 focus:text-red-500`}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        className={`${activeItem === 'projects' ? 'text-red-500' : ''} hover:text-red-500 focus:text-red-500`}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        className={`${activeItem === 'contact' ? 'text-red-500' : ''} hover:text-red-500 focus:text-red-500`}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
