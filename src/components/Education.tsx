import React from 'react';
import { motion } from "framer-motion";
import { useDarkMode } from '../context/DarkModeContext';
import Image from 'next/image';

const Education = () => {
  const { darkMode } = useDarkMode();

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "MIT Academy of Engineering",
      period: "2021 - 2025",
      description: "Focused on cloud computing, software engineering, and web development.",
      achievements: [
        "CGPA: 8.96",
      ]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "JAI Hind Higher Secondary School",
      period: "2018 - 2020",
      description: "Completed HSC with focus on Physics, Chemistry, and Mathematics.",
      achievements: [
        "Percentage: 70.46 %",
        
      ]
    },
    {
      degree: "Secondary School Education (10th Grade)",
      institution: "Podar International School (CBSE)",
      period: "2018 - 2019",
      achievements: [
        "Percentage : 84.33 %",
      ]
    }   
  ];
  const certifications = [
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      badge: "/aws-cloud-foundations.png"
    },
    {
      name: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services Training and Certification",
      badge: "/aws-cloud-architect.png"
    },
    {
      name: "AWS Academy Data Engineering",
      issuer: "Amazon Web Services Training and Certification",
      badge: "/aws-data-engineering.png"
    },
    {
      name: "Red Hat Academy - Program Learner",
      issuer: "Red Hat",
      badge: "/redhat-academy.png"
    },
    {
      name: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services Training and Certification",
      badge: "/aws-ml-foundations.png"
    },
    {
      name: "AWS Academy Microservices and CI/CD Pipeline Builder",
      issuer: "Amazon Web Services Training and Certification",
      badge: "/aws-microservices.png"
    },
    {
      name: "Google Cloud Career Readiness Associate Engineer",
      issuer: "Google Cloud",
      badge: "/GCP.png"
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

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
              darkMode ? 'bg-lime-400' : 'bg-lime-500'
            }`}></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-16 ${index % 2 === 0 ? 'pr-8 ml-auto pl-4' : 'pl-8 mr-auto pr-4'} w-1/2`}
              >
                {/* Connection Circle */}
                <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-8 transform ${index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'} w-4 h-4 rounded-full ${
                  darkMode ? 'bg-lime-400' : 'bg-lime-500'
                } z-10`}></div>

                {/* Connection Line */}
                <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-10 w-8 h-1 ${
                  darkMode ? 'bg-lime-400' : 'bg-lime-500'
                }`}></div>

                <div className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="relative">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className={`text-lg mb-2 ${
                      darkMode ? 'text-lime-400' : 'text-lime-600'
                    }`}>{edu.institution}</p>
                    <p className={`text-sm mb-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{edu.period}</p>
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{edu.description}</p>
                    
                    {/* Achievements */}
                    <div className={`mt-4 p-4 rounded-lg ${
                      darkMode ? 'bg-gray-900' : 'bg-gray-50'
                    }`}>
                      {/* <h5 className="font-semibold mb-2">Key Achievements:</h5> */}
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className={`mr-2 ${
                              darkMode ? 'text-lime-400' : 'text-lime-600'
                            }`}>•</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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

          <div className="relative overflow-hidden">
            <div className="certifications-scroll flex w-max">
              {[...certifications, ...certifications].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % certifications.length) * 0.1 }}
                  className={`cert-card flex-none w-72 p-6 rounded-lg ${
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
        .certifications-scroll {
          display: flex;
          gap: 1rem;
          animation: scrollLoop 15s linear infinite;
        }

        @keyframes scrollLoop {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default Education;