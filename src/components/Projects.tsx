"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// ProjectCard Interface
interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  link?: string;
  image?: string; // Added image property
  altText?: string; // For image accessibility
}

// Card Hover Animations
const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" },
};

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  skills, 
  link, 
  image, 
  altText 
}) => {
  return (
    <motion.div 
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image Container */}
      {image && (
        <div className="relative w-full h-48">
          <Image 
            src={image} 
            alt={altText || `${title} project image`}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content Container */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Data
const projects = [
  {
    title: "Folding Cart Design",
    description: "Designed and fabricated a compact, foldable transportation cart using mild steel and ergonomic components for multipurpose usage like shopping and gardening.",
    skills: ["Product Design", "Material Selection", "Mechanical Fabrication", "Portability"],
    image: "/chotucart.png",
    altText: "Foldable cart prototype for multi-utility transport",
    link: "https://drive.google.com/file/d/1xl0wz5I6QQyfr_EKIAFYq0wStvvyQmRR/view?usp=sharing"
  },
  {
    title: "Autonomous Guided Vehicle (AGV)",
    description: "Developed a sensor-integrated AGV capable of autonomous navigation and real-time obstacle detection using LiDAR and Raspberry Pi, aligned with Industry 4.0 standards.",
    skills: ["Raspberry Pi", "LiDAR", "Embedded Systems", "Machine Learning"],
    image: "/lidar3.png",
    altText: "AGV navigating warehouse environment",
    link: "https://drive.google.com/file/d/1Pr6SJgedZlDBzqzkfPiSDhd4srkqw3g9/view?usp=sharing"
  },
  {
    title: "Office HVAC System Design",
    description: "Engineered an energy-efficient air conditioning system for office spaces using precise heat load calculations and ANSYS Fluent simulations for optimized duct design and thermal control.",
    skills: ["HVAC", "ANSYS Fluent", "CFD", "Energy Efficiency"],
    image: "/rac.png",
    altText: "CFD simulation of office air conditioning layout",
    link: "https://drive.google.com/file/d/1vrl6jZI1yC6drJAIt1vyWLa3T8-8WfNs/view?usp=sharing"
  },
  {
    title: "Heat Exchanger Baffle Optimization",
    description: "Analyzed thermal performance of a shell and tube heat exchanger by simulating different baffle plate configurations to find the optimal balance between heat transfer efficiency and pressure drop.",
    skills: ["Heat Transfer", "ANSYS Simulation", "Thermal Analysis", "CAD Modeling"],
    image: "/baffle.png",
    altText: "Simulation of heat exchanger with varied baffle configurations",
    link: "https://drive.google.com/file/d/1OfrwSIFRQloP4UV0b9ECZgmWVbR68_Uc/view?usp=sharing"
  },
  {
    title: "Development and Characterization of Sustainable Materials for Noise Reduction",
    description: "Developed eco-friendly composite panels using jute, felt, and wood mixtures with epoxy resin, tested for acoustic efficiency via impedance tube to promote sustainable industrial noise control.",
    skills: ["Acoustics", "Material Science", "Sustainability", "Experimental Testing"],
    image: "/capastone.png",
    altText: "Eco-friendly composite panels for noise reduction",
    link: "https://drive.google.com/file/d/1FKsKh7UMMeYBMR19_i3uYClHHS7nP208/view?usp=sharing"
  },
  {
  title: "Emojify – Create Your Own Emoji",
  description: "Built a deep learning-based system to generate personalized emojis from facial expressions or text emotions using CNNs and NLP models, integrating Python, TensorFlow, and OpenCV for a fun and interactive emotion-to-emoji pipeline.",
  skills: ["Deep Learning", "CNN", "NLP", "TensorFlow", "OpenCV"],
  image: "/emoji.png",
  altText: "Emoji generation from facial expression and emotion detection",
}

]
;

// Projects Component
const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-20 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
        </motion.div>

        {/* Animated Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;