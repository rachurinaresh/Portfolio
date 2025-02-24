import { FaGithub } from "react-icons/fa";
import portfolilo from "../assets/images/portfolio.webp";
import award from "../assets/images/award.webp";
import bugs from "../assets/images/bugs.webp";
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
    ],
    github: "",
    image: award,
  },
  {
    title: "RelEasy",
    description:
      "Releasy integrates with JIRA to automatically fetch the necessary project tickets for release note generation. It offers users the ability to edit and customize the generated notes for accuracy. Once finalized, the release notes can be exported as a professional PDF.",
    tech: [
      "React",
      "Redux",
      "ASP.NET",
      "Atlassian SDK",
      "MS SQL",
      "Typescript",
      "Jira",
      "Bootstrap",
      "Material UI",
      "TinyMCE",
    ],
    github: "https://github.com/rachurinaresh/RelEasy",
    image: bugs,
  },
  {
    title: "My Portfolio",
    description:
      "A modern, responsive portfolio website built with React JS and Tailwind CSS to showcase projects, skills, and professional journey.",
    tech: [
      "React",
      "Tailwind CSS",
      "Javescript",
      "Responsive Design",
      "React Icons",
    ],
    github: "https://github.com/rachurinaresh/Portfolio",
    image: portfolilo,
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        🚀 Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/50"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center">
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-white bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600/40 transition border border-blue-500/20"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              ) : (
                <div className="inline-flex items-center px-4 py-2 bg-gray-700/20 backdrop-blur-sm text-gray-400 rounded-lg cursor-not-allowed border border-gray-600/20">
                  <FaGithub className="mr-2" />
                  Code Private
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <p className="text-white text-lg font-semibold">Code Private</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
