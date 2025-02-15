import { useState } from "react";

const Experience = () => {
  const [myExperiences] = useState([
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
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Experience
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myExperiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            {/* Employer Logo with Background Fix */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  {exp.duration}
                </p>
              </div>
            </div>

            {/* Job Description */}
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
              {exp.description.map((point, i) => (
                <li key={i} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
