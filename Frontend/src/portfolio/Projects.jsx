import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-grow" id='projects'>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-10">My Projects</h1>
        <div className="max-w-screen-lg w-full flex flex-wrap justify-center">
          {user.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
            >
              <div className="bg-gray-500 p-3 rounded-lg shadow-md cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto rounded-t-lg max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-72"
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-white text-lg font-bold mb-1">{project.title}</h2>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
