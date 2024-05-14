import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../../public/assets/bg.jpg';
const Skills = ({ user }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView && !isAnimated) {
    setIsAnimated(true);
  }

  return (
    <div id='skills' className="h-screen flex justify-center items-center bg-no-repeat bg-cover "style={{backgroundImage: `url(${bgImage})`}}>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">My Skills</h1>
        <div className="flex flex-wrap justify-center sm:w-2/3 lg:w-1/2sm:space-x-2 lg:space-x-5 pt-10">
          {user.skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0.5, y: -50 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md mb-3 mr-3"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
