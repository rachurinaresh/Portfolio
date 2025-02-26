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
        "Engineered and deployed the Recognizing Scholars application using React, Flask, and MySQL, managing data for 227,485 awardees, 3,600 awards, and 1,734 societies.",
        "Developed a knowledge graph for comparing 2-3 awards, enhancing insights into 3,600 awards and their relationships.",
        "Automated data collection by scraping 50+ websites with Selenium and retrieving detailed profiles for 10,000+ scholars using the Google Scholar API.",
        "Integrated fine-tuned datasets into GPT-4 via OpenAI Playground to predict eligibility for 3,600 awards.",
        "Fine-tuning LLAMA models on award data to improve AI-driven award eligibility predictions and enhance model accuracy.",
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
        "Developed 2+ scalable React-based frontend applications with best practices and essential packages.",
        "Built a browser extension for EHR systems using web scraping to extract and analyze patient data, ensuring compatibility with Chrome, Firefox, Edge, and Safari.",
        "Developed a finance portal for HALO's Supplier Relations team, automating onboarding, pricing, and trade show management, reducing manual effort by 60%.",
        "Integrated .NET APIs to process 1,000+ patient records per session, improving data efficiency by 40% and accelerating clinical decision-making by 30%.",
        "Implemented test cases for React components, enhancing platform reliability by 95% and ensuring full responsiveness across all devices.",
      ],
      gradient: "from-[#1E293B] to-[#334155]",
      borderColor: "border-[#475569]",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      className="relative p-6 md:p-10 min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-6xl">
        {myExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className={`relative p-6 md:p-10 rounded-2xl shadow-xl border ${exp.borderColor} backdrop-blur-xl bg-gradient-to-r ${exp.gradient} transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <motion.img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 md:w-16 md:h-16 object-contain bg-white p-2 rounded-full shadow-md"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.role}
                </motion.h3>
                <p className="text-gray-300 text-sm md:text-lg">
                  {exp.company}
                </p>
                <p className="text-xs md:text-sm text-gray-400 italic">
                  {exp.duration}
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-100 text-sm md:text-lg space-y-1 md:space-y-2">
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
