import { motion } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const sectionRef = useRef(null);

  const myExperiences = [
    {
      role: "Graduate Research Assistant",
      company: "University of Texas at Arlington",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/University_of_Texas_at_Arlington_logo.svg",
      duration: "July 2024 - Present",
      description: [
        "Developed the Recognizing Scholars application using React, Flask, and MySQL.",
        "Created a knowledge graph for awards comparison.",
        "Scraped 50+ websites for scholar data using Selenium and Google Scholar API.",
        "Integrated GPT-4 for award eligibility prediction.",
      ],
      gradient: "from-[#2A2D3E] to-[#475569]",
      borderColor: "border-[#64748B]",
    },
    {
      role: "Software Engineer",
      company: "Techigai Private Limited",
      logo: "https://techigai.io/wp-content/uploads/2021/08/logo.svg",
      duration: "Sept 2021 - Dec 2023",
      description: [
        "Developed React-based frontend applications with scalable architecture.",
        "Built a browser extension for EHR systems to extract patient demographics.",
        "Engineered a finance portal reducing manual processes by 60%.",
        "Designed comprehensive test cases improving platform reliability by 95%.",
      ],
      gradient: "from-[#1E293B] to-[#334155]",
      borderColor: "border-[#475569]",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="relative p-10 min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // Ensures it replays every time the section is visible
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {myExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className={`relative p-10 rounded-2xl shadow-xl border ${exp.borderColor} backdrop-blur-xl bg-gradient-to-r ${exp.gradient} transition-transform transform hover:scale-105`}
          >
            {/* Content */}
            <div className="flex items-center space-x-4 mb-6">
              <motion.img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain bg-white p-2 rounded-full shadow-md"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <motion.h3
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.role}
                </motion.h3>
                <p className="text-gray-300 text-lg">{exp.company}</p>
                <p className="text-sm text-gray-400 italic">{exp.duration}</p>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-100 text-lg space-y-2">
              {exp.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
