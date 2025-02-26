import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-gray-100 dark:text-gray-100">
          Naresh Rachuri
        </h1>

        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-300 dark:text-gray-300 cursor-pointer hover:text-blue-500 transition"
              >
                {item}
              </Link>
            )
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-gray-300 dark:text-gray-300" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-300 dark:text-gray-300" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Experience", "Skills", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 dark:text-gray-300 cursor-pointer hover:text-blue-500 transition text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
