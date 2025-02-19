import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`py-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold">Azeem Shaikh</h3>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Passionate Cloud Architect & Full-Stack Developer
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            Pushing innovation through technology.
          </p>
        </div>

        <div className="flex space-x-6">
          {[
            {
              href: "https://github.com/azshaikh0786",
              icon: Github,
              
            },
            {
              href: "https://www.linkedin.com/in/azeem-shaikh-688a5224b",
              icon: Linkedin,
              
            },
            {
              href: "mailto:azeem.shaikh@mitaoe.ac.in",
              icon: Mail,
             
            },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full border transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-300 hover:bg-blue-100"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${darkMode ? "text-lime-400" : "text-blue-600"}`}
              />
            </a>
          ))}
        </div>

        <div className={`text-sm mt-4 md:mt-0 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
          &copy; {new Date().getFullYear()} Azeem Shaikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
