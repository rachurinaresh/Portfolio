import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import portfolilo from "../assets/images/portfolio.webp";
import award from "../assets/images/award.webp";
import bugs from "../assets/images/bugs.webp";
import bizOrders from "../assets/images/BizOrders.png";

const projects = [
  {
    title: "Recognizing Scholars",
    description:
      "AI-driven award prediction system that uses LLM fine-tuning and automation to recommend awards based on academic profiles.",
    tech: [
      "Python",
      "LLMs",
      "Fine-Tuning",
      "Flask",
      "React",
      "MySQL",
      "Selenium WebDriver",
      "knowledge graph",
    ],
    github: "",
    image: award,
  },
  {
    title: "RelEasy",
    description:
      "Automates JIRA ticket retrieval for release notes, allowing users to edit and export accurate reports as PDFs.",
    tech: [
      "React Typescript",
      "Redux",
      "ASP.NET",
      "Atlassian SDK",
      "MS SQL",
      "Jira",
      "Material UI",
      "TinyMCE",
    ],
    github: "https://github.com/rachurinaresh/RelEasy",
    image: bugs,
  },
  {
    title: "Biz Orders",
    description:
      "An MVC project with two user modes: Customer and Admin. Customers place orders, while Admins manage orders based on customer details and time filters.",
    tech: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "CSHTML",
      "MS SQL",
      "jQuery",
      "Bootstrap",
    ],
    github: "https://github.com/rachurinaresh/BizOrders_MVC",
    image: bizOrders,
  },
  {
    title: "My Portfolio",
    description:
      "A modern portfolio website built with React and Tailwind CSS to showcase projects, skills, and professional journey in a visually engaging way.",
    tech: [
      "React",
      "Tailwind CSS",
      "Javascript",
      "Responsive Design",
      "React Icons",
    ],
    github: "https://github.com/rachurinaresh/Portfolio",
    image: portfolilo,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-900 px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
        🚀 Projects
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 transition-transform hover:scale-105 flex flex-col h-[500px]">
              <div className="relative w-full h-[180px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h2 className="text-xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-600/20 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed">
                      <FaGithub className="mr-2" />
                      Code Private
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-semibold hover:underline"
                  >
                    Explore Code
                  </a>
                ) : (
                  <p className="text-white text-lg font-semibold">
                    Code Private
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
