import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [triggerKey, setTriggerKey] = useState(0); // Key to force re-render

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => {
            setIsVisible(true);
            setTriggerKey((prev) => prev + 1); // Force re-render to restart animation
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
      name: ".NET",
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
      img: "https://imgs.search.brave.com/Z5KzvnbDLcIM0PWp7CcoTA7Rp3go5U8SMilVC0FGycQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw",
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
      name: "Entity Framework",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Selenium",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    },
  ];

  // Random initial position outside viewport
  const getRandomStartPosition = () => {
    const positions = [
      { x: -500, y: 0 }, // Left
      { x: 500, y: 0 }, // Right
      { x: 0, y: -500 }, // Top
      { x: 0, y: 500 }, // Bottom
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold text-white mb-12 tracking-wider uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      {/* Skills Container */}
      <motion.div
        key={triggerKey} // Force component to re-render when animation restarts
        className="relative grid gap-8 w-full max-w-7xl px-6 justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {skills.map((skill, index) => {
          const initialPos = getRandomStartPosition();
          return (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 p-4 bg-gray-900 rounded-full border border-gray-700 shadow-lg hover:shadow-blue-500 transition-all"
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
                className="w-12 h-12 object-contain"
              />
              <p className="text-white text-sm mt-2 text-center">
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
