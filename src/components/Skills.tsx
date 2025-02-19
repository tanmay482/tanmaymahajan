"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Globe } from 'lucide-react'; // Skill icons

const skills = [
  { name: "C++", icon: Code },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Globe },
  { name: "AWS Cloud", icon: Cloud },
  { name: "MySQL", icon: Database },
  { name: "DBMS", icon: Database },
];

const Expertise = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
            >
              <skill.icon className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
