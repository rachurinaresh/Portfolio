import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import certificateImage from "../assets/images/certificate-presenting.jpeg";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 md:px-20"
    >
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={certificateImage}
          alt="Naresh Rachuri receiving Runner-up certification"
          className="w-80 h-80 md:w-96 md:h-96 rounded-lg object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          I am Naresh Rachuri, a Full Stack Developer & AI Enthusiast with
          expertise in React, .NET Core, Flask, and MySQL. Currently, I am
          pursuing my Master's in Computer Science at The University of Texas at
          Arlington (UTA), specializing in AI-driven solutions, automation, and
          cloud-based applications.
        </p>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🏆 Achievements
          </h2>
          <ul className="list-none space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />{" "}
              Runner-up in a Techigai Hackathon for the Releasy Project, an
              automated release notes generation tool.
            </li>
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />{" "}
              Employee of the Quarter for outstanding contributions.
            </li>
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />{" "}
              Finalist at Code Gladiators 2021 for problem-solving.
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🎯 Work Philosophy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I believe in AI-driven development, automation, and scalability. My
            approach focuses on writing clean, efficient code and solving
            complex problems through collaborative development and AI
            integration.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
