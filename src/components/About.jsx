import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import certificateImage from "../assets/images/certificate-presenting.jpeg";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 md:px-20 overflow-hidden"
    >
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <img
          src={certificateImage}
          alt="Naresh Rachuri receiving certification"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-lg object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          About Me
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I am Naresh Rachuri, a Full Stack Developer and AI Enthusiast with a
          commitment to clean, efficient code and collaborative development. I
          focus on automation and continually seek new challenges to expand my
          technical expertise.
        </p>

        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🏆 Achievements
          </h2>
          <ul className="list-none space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />
              Runner-up in a Techigai Hackathon for the Releasy Project – an
              automated release notes generation tool.
            </li>
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />
              Employee of the Quarter for outstanding contributions.
            </li>
            <li>
              <FaTrophy className="inline-block text-yellow-500 mr-2" />
              Finalist at Code Gladiators 2021 for problem-solving.
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            🎓 Education
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            <li>
              Master's in Computer Science, The University of Texas at Arlington
              (UTA) - (2024 to Expected December 2025)
            </li>
            <li>
              Bachelor's in Computer Science and Engineering, CMR Group Of
              Institutions - (2018 to 2022)
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
