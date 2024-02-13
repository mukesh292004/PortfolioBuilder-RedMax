import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ user }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView && !isAnimated) {
    setIsAnimated(true);
  }

  return (
    <div id='skills' className="h-screen flex justify-center items-center bg-no-repeat bg-cover bg-[url(https://img.freepik.com/free-vector/background-luxury-minimalist-gradient-style-design_698780-700.jpg?w=1380&t=st=1706847501~exp=1706848101~hmac=8665b46b7299cae3f9160b6abb06d8ea7c1e1604a5fc6d2ef0ee38f94972e710)]">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">My Skills</h1>
        <div className="flex flex-wrap justify-center">
          {user.skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0.5, y: -50 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-500 text-white p-3 rounded-lg shadow-md mb-3 mr-3"
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
