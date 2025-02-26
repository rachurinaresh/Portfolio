import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
            setTriggerKey((prev) => prev + 1);
          }, 200);
        }
      },
      { threshold: 0.3 }
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

  const skills = [
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
      name: "C#",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    },
    {
      name: "ASP.NET",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "ASP.NET MVC",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Entity Framework",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Flask",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Material UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
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
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
    {
      name: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MSSQL",
      img: "https://static.cdnlogo.com/logos/m/6/microsoft-sql-server.svg",
    },
    {
      name: "Selenium",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    },
    {
      name: "Fine-Tuning",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Neural_network.svg",
    },
  ];

  const getRandomStartPosition = () => {
    const positions = [
      { x: -500, y: 0 },
      { x: 500, y: 0 },
      { x: 0, y: -500 },
      { x: 0, y: 500 },
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-wider uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        key={triggerKey}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl px-6"
      >
        {skills.map((skill, index) => {
          const initialPos = getRandomStartPosition();
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-4 bg-gray-900 rounded-full border border-gray-700 shadow-lg hover:shadow-blue-500 transition-all"
              initial={
                isVisible
                  ? { x: initialPos.x, y: initialPos.y, opacity: 0 }
                  : {}
              }
              animate={isVisible ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{
                duration: 2,
                delay: index * 0.05,
              }}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <p className="text-white text-xs sm:text-sm mt-2 text-center">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
