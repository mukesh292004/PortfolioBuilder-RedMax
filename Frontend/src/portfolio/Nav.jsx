import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const navItems = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "about",
    name: "About Me",
  },
  {
    path: "skills",
    name: "Skills",
  },
  {
    path: "projects",
    name: "Projects",
  },
  {
    path: "Experience",
    name: "Experience",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const handleItemClick = (path) => {
    setHoveredPath(path);
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-50">
      <nav className="flex justify-center items-center  px-2 py-2 bg-white bg-opacity-80 shadow-lg rounded-full dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75">
        {navItems.map((item, index) => {
          const isActive = item.path === hoveredPath;

          return (
            <Link
              key={item.path}
              className={`px-3 py-1 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-200"
              }`}
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
              onClick={() => handleItemClick(item.path)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-full bg-stone-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    zIndex: -1,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
