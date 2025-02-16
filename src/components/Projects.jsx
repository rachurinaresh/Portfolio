import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Recognizing Scholars",
    description:
      "AI-driven award prediction system that uses LLM fine-tuning and automation to recommend awards based on academic profiles.",
    tech: ["Python", "LLMs", "Fine-Tuning", "Flask", "MySQL"],
    github: "https://github.com/yourusername/recognizing-scholars",
    live: "https://yourliveproject.com",
  },
  {
    title: "Releasy",
    description:
      "Hackathon-winning project for automated release notes generation, reducing manual effort by 70% through AI-driven analysis.",
    tech: ["React", "Node.js", "AI Automation"],
    github: "https://github.com/yourusername/releasy",
    live: "https://yourliveproject.com",
  },
  {
    title: "Browser Extension for Patient Data",
    description:
      "A browser extension that scrapes patient demographic data, integrates with EHR systems, and enhances healthcare workflows.",
    tech: ["JavaScript", "Web Scraping", "Chrome Extension", "React"],
    github: "https://github.com/yourusername/browser-extension",
    live: "https://yourliveproject.com",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gray-900 px-6 py-16 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
        🚀 My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 shadow-xl rounded-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h2>
            <p className="text-gray-400 text-sm">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaExternalLinkAlt className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
