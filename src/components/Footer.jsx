import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 bg-gray-800 dark:bg-gray-800 text-center">
      <div className="flex justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
        <a
          href="https://www.linkedin.com/in/naresh-rachuri-12863a214/"
          target="_blank"
        >
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 hover:text-blue-800 transition" />
        </a>
        <a href="https://github.com/rachurinaresh" target="_blank">
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-black transition" />
        </a>
        <a href="mailto:rachurinaresh249@gmail.com">
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 hover:text-purple-800 transition" />
        </a>
      </div>

      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
        📍 Arlington, TX, USA
      </p>

      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 mt-1 sm:mt-2">
        &copy; {new Date().getFullYear()} | Built by{" "}
        <span className="font-semibold">Naresh Rachuri</span>
      </p>
    </footer>
  );
};

export default Footer;
