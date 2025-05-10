"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext"; // Import the dark mode context

const skills = [
  

  // Mechanical/Design Tools
  { name: "Fusion 360", icon: "/autodesk-fusion-360-logo-png_seeklogo-482400.png", category: "CAD" },
  { name: "Creo", icon: "/PTC_Creo_logo.svg.png", category: "CAD" },
  { name: "CATIA", icon: "/CATIA-Logo.png", category: "CAD" },
  { name: "AutoCAD", icon: "/AutoCAD-logo.png", category: "CAD" },
  { name: "CET Commercial Interiors", icon: "/CET_.png", category: "CAD" },
  { name: "Ansys", icon: "/ANSYS_logo.png", category: "Simulation" },

  // Industry Knowledge
  { name: "Supply Chain", icon: "/supply4.png", category: "Operations" },
  { name: "Quality Control", icon: "/pngtree-icon-quality-control.png", category: "Operations" },
  { name: "Product Lifecycle Management (PLM)", icon: "/plm.png", category: "Project" },
  { name: "Lean Manufacturing", icon: "/lean manufacture.png", category: "Operations" },
  { name: "Six Sigma", icon: "/six sigma.png", category: "Operations" },



  // Soft Skills

  { name: "Time Management", icon: "/tem.png", category: "Soft Skill" },
];


const Expertise = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <section id= "skills"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className={`w-20 h-1 mx-auto rounded ${darkMode ? "bg-lime-400" : "bg-blue-500"}`} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div
                className={`rounded-xl p-6 h-full flex flex-col items-center justify-center border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 group-hover:border-lime-400"
                    : "bg-white border-gray-300 group-hover:border-blue-500"
                }`}
              >
                <div className="relative w-16 h-16 mb-4">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                <span
                  className={`text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? "text-lime-400" : "text-blue-500"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
