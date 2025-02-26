import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/images/profile.jpeg";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row justify-center items-center text-left overflow-hidden pt-16 md:pt-20 bg-black">
      <video
        className="absolute top-20 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://media.istockphoto.com/id/1145488267/video/squirrel-running.mp4?s=mp4-640x640-is&k=20&c=Q794eQTOk1oMYRajaX7P6xU9hpFfm_sL25UV5c1_iGw="
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-56 sm:w-80 sm:h-64 md:w-96 md:h-80 bg-black/60 backdrop-blur-3xl rounded-lg flex items-center justify-center"></div>
      <div className="relative z-10 px-6 md:px-20 text-white flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-400">Naresh</span> <br />
            <span className="text-white">Rachuri 👋</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mt-2">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Front-End Developer",
                "Back-End Developer",
                "Fine-Tuning LLMs",
                "Browser Extension Developer",
                "Web Scraping Expert",
                "Web Developer",
                "Software Engineer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mt-6">
            Passionate about building intelligent, responsive, and scalable web
            applications that enhance performance and user experience. I
            specialize in Full Stack Development, AI-powered automation, and
            adaptive web designs to create seamless digital solutions that work
            across all screen sizes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1_Dg-bDwtYJtdKZfKGsQiT8QEfpDiRRs8/view?usp=drive_link"
              download
              target="_blank"
              className="flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 rounded-xl text-base sm:text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              <FaDownload className="mr-2 sm:mr-3" />
              Resume
            </a>
            <div className="flex space-x-5 sm:space-x-6 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/naresh-rachuri-12863a214/"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a href="https://github.com/rachurinaresh" target="_blank">
                <FaGithub className="w-6 h-6 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={profileImage}
            alt="Naresh Rachuri"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
