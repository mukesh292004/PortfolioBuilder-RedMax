import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen flex justify-center  p-10 flex-grow" id='projects'>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-10">My Projects</h1>
        <div className="w-full flex flex-wrap  justify-center lm:justify-between">
        {user.projects.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="flex-shrink-0 w-full lg:w-96 sm:w-auto p-5 mb-8 lg:h-[42rem]  bg-gray-900 rounded-lg shadow-md overflow-hidden"
    style={{ maxWidth: "320px", margin:"10px"}}
  >
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full sm:h-64 lg:h-50 object-cover object-center"
    />
    <div className="p-4">
      <h2 className="text-white text-lg font-bold mb-2">{project.title}</h2>
      <p className="text-gray-200 text-sm mb-4">{project.description}</p>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map((technology, index) => (
          <li key={index} className="bg-gray-700 px-3 py-1 text-xs uppercase tracking-wide text-white rounded-full" style={{ marginRight: "8px" }}>
            {technology}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
))}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
