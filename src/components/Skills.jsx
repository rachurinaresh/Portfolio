import { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills] = useState([
    {
      category: "Programming Languages",
      items: [
        {
          name: "Python",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "C++",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java (Basic)",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Angular",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
        },
        {
          name: "Flask",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
        {
          name: "Material UI",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
      ],
    },
    {
      category: "Web & Frontend Technologies",
      items: [
        {
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "SCSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          name: "Tailwind CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Bootstrap",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "TypeScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "WordPress",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        },
      ],
    },
    {
      category: "Databases & Backend Technologies",
      items: [
        {
          name: "MySQL",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Entity Framework",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
      ],
    },
    {
      category: "Development & Collaboration Tools",
      items: [
        {
          name: "VS Code",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Git",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "GitLab",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        },
        {
          name: "Jira",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        },
        {
          name: "Bitbucket",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
        },
        {
          name: "Confluence",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
        },
      ],
    },
    {
      category: "Web Scraping & Automation",
      items: [
        {
          name: "Selenium",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        },
      ],
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      {skills.map((skillCategory, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {skillCategory.category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillCategory.items.map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 3 }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
