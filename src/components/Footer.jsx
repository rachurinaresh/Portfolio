import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaFilePdf,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="w-full flex flex-col items-center py-6 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center space-y-3">
        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-md dark:bg-blue-900 dark:text-blue-300">
          Let's Connect
        </span> */}

        <div className="flex items-center space-x-3">
          <h2 className="text-gray-700 dark:text-gray-300">
            rachurinaresh249@gmail.com
          </h2>
          <button
            onClick={() => copyToClipboard("rachurinaresh249@gmail.com")}
            className="flex items-center bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 text-sm rounded transition"
            aria-label="Copy email"
          >
            <ClipboardIcon className="w-4 h-4 mr-1" /> Copy
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <h2 className="text-gray-700 dark:text-gray-300">+1 682-392-6037</h2>
          <button
            onClick={() => copyToClipboard("+1 682-392-6037")}
            className="flex items-center bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 text-sm rounded transition"
            aria-label="Copy phone number"
          >
            <ClipboardIcon className="w-4 h-4 mr-1" /> Copy
          </button>
        </div>

        <div className="flex space-x-4 mt-3">
          <a
            href="https://www.linkedin.com/in/naresh-rachuri-12863a214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/rachurinaresh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          {/* <a
            href="/resume.pdf"
            download
            className="text-red-600 hover:text-red-800 transition"
            aria-label="Download Resume"
          >
            <FaFilePdf className="w-6 h-6" />
          </a>
          <a
            href="mailto:rachurinaresh249@gmail.com"
            className="text-purple-600 hover:text-purple-800 transition"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a> */}
        </div>
      </div>

      <div className="w-full mt-6 border-t border-gray-300 dark:border-gray-600 pt-3 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; 2025 | Designed & Coded by{" "}
          <span className="font-semibold">Naresh Rachuri</span> 🕺
        </p>
      </div>
    </div>
  );
};

export default Footer;
