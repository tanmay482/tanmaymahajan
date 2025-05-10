import React from 'react';
import { motion } from "framer-motion";
import { useDarkMode } from '../context/DarkModeContext';
import Image from 'next/image';

const Education = () => {
  const { darkMode } = useDarkMode();

  const educationData = [
    {
      degree: "B.Tech Mechanical Engineering ",
      institution: "MIT Academy of Engineering",
      period: "2021 - 2025",
      description: "Focused on mechanical design, automation, and system optimization.",
      achievements: [
        "CGPA: 8.36",
      ]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Shree Shivaji Vidya Mandir, Aundh Pune",
      period: "2019 - 2021",
      description: "Completed HSC with focus on Physics, Chemistry, and Mathematics.",
      achievements: [
        "Percentage: 77 %",
      ]
    },
    {
      degree: "Secondary School Education (10th Grade)",
      institution: "NHS Sanghvi Pune",
      period: "2018 - 2019",
      achievements: [
        "Percentage : 78 %",
      ]
    }   
  ];

  const certifications = [
    {
      name: "Alteryx Foundational Micro",
      issuer: "Alteryx Foundation",
      badge: "/alter found.png"
    },
    {
      name: "Product Design and Manufacturing ",
      issuer: "NPTEL",
      badge: "/nptel 2.png"
    },
    {
      name: " Learning Java 11",
      issuer: "Linkedin Learning",
      badge: "/java.png"
    },
    {
      name: "Barclays LifeSkills Programme ",
      issuer: "GTT Foundation",
      badge: "/barclays-logo_brandlogos.net_2xdee-512x512.png"
    },
    {
      name: "Datathon",
      issuer: "GirlScript",
      badge: "/script.jpg"
    },
    {
      name: "Hydraulics Calculoation and Hydraulic Circuit Design",
      issuer: "Udemy",
      badge: "/hydro.png"
    },
    {
      name: "Alteryx Designer Core",
      issuer: "Alteryx Foundation",
      badge: "/de mixro al.png"
    }
  ];

  return (
    <>
      {/* Education Section */}
      <section id="education" className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#fafafa] text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h2>
            <div className={`w-20 h-1 mx-auto rounded ${
              darkMode ? 'bg-lime-400' : 'bg-lime-500'
            }`}></div>
          </motion.div>

          <div className="relative">
            <div className="grid gap-8 max-w-3xl mx-auto">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={`p-6 rounded-lg shadow-lg ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 p-2 rounded-lg ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <svg
                          className={`w-6 h-6 ${
                            darkMode ? 'text-lime-400' : 'text-lime-500'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14v7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm ${
                          darkMode ? 'text-lime-400' : 'text-lime-600'
                        } mb-1`}>
                          {edu.period}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <p className={`text-lg mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {edu.institution}
                        </p>
                        {edu.description && (
                          <p className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {edu.description}
                          </p>
                        )}
                        {edu.achievements.map((achievement, i) => (
                          <p
                            key={i}
                            className={`mt-2 text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}
                          >
                            {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`} id="certifications">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications
            </h2>
            <div className={`w-20 h-1 mx-auto rounded ${
              darkMode ? 'bg-lime-400' : 'bg-lime-500'
            }`}></div>
          </motion.div>

          <div className="relative overflow-hidden certification-container">
            <div className="certifications-scroll flex w-max">
              {[...certifications, ...certifications].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % certifications.length) * 0.1 }}
                  className={`cert-card flex-none w-72 p-6 mx-2 rounded-lg ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative w-32 h-32">
                      <Image
                        src={cert.badge}
                        alt={`${cert.name} Badge`}
                        width={120}
                        height={120}
                        className="rounded-lg object-contain"
                        priority={index < 2}
                      />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .certification-container {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
        }

        .certifications-scroll {
          display: flex;
          gap: 1rem;
          animation: scrollLoop 30s linear infinite;
          padding: 10px 0;
        }

        .certification-container:hover .certifications-scroll {
          animation-play-state: paused;
        }

        @keyframes scrollLoop {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .cert-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: scale(1.05);
          z-index: 1;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Education;