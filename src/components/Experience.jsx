import { motion } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const sectionRef = useRef(null);

  const myExperiences = [
    {
      role: "Graduate Research Assistant",
      company: "Innovative Data Intelligence Research Laboratory",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/University_of_Texas_at_Arlington_logo.svg",
      duration: "July 2024 - Present",
      description: [
        "Integrated MCP servers into award evaluation workflows, enabling context-aware AI predictions; improved retrieval efficiency by 40% and reduced manual data collection by 50%.",
        "Enhanced predictive modeling by fine-tuning GPT-4 datasets and optimizing LLaMA models with award-specific data, boosting eligibility predictions for 3,600+ awards.",
        "Engineered and deployed the Recognizing Scholars application using React, Flask, and MySQL, managing data for 227,000+ awardees, 3,600 awards, and 1,700+ societies.",
        "Automated scholar data collection by scraping 50+ websites with Selenium and extracting 10,000+ detailed scholar profiles from Google Scholar API; exported results to Excel.",
        "Collaborated with faculty and research teams to align award eligibility predictions with university goals.",
        "Constructed a knowledge graph to visualize relationships between 3,600 awards, enabling comparisons of at least 2 and at most 3 awards at a time for improved insights into data connections",
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
        "Developed and deployed 2+ React applications with TypeScript and best practices to ensure scalability and maintainability.",
        "Built a cross-browser EHR extension (Chrome, Firefox, Edge, Safari) using web scraping to extract and analyze patient demographics and risks.",
        "Integrated .NET APIs to process 1,000+ patient records per session, improving data handling efficiency by 40% and clinical decision-making speed by 30%.",
        "Authored comprehensive test cases for React components, improving platform reliability by 95% and ensuring responsiveness across mobile, tablet, and desktop.",
        "Created a responsive finance portal for HALO Supplier Relations, automating supplier onboarding, pricing, invoicing, and trade show management, reducing manual effort by 60%.",
        "Developed a reusable component library for HALO portals, improving code reusability and reducing redundant development effort by 65%.",
        "Resolved critical hotfix bugs and implemented high-priority features, ensuring system stability, reducing downtime by 40%, and enhancing user experience.",
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
