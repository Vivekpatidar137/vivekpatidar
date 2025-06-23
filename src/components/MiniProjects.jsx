import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projectNames = [
  "Weather App",
  "Music Player",
  "Task Manager",
  "Drawing App",
  "Password Generator",
  "Quiz Game",
  "Age Calculator",
  "Digital Clock",
  "Drag & Drop",
  "Popup",
  "Quote Generator",
  "Simple Color Picker",
  "Email Subscription",
  "Image Gallery",
  "Cosmic Website",
  "Calculator",
];

const MiniProjects = () => {
  return (
    <section id="mini-projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-300 relative">
          Creative Mini Projects
          <div
            className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "6px" }}
          />
          <div
            className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-transparent to-pink-500 rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "4px" }}
          />
        </h2>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Here’s a curated collection of mini projects built with{" "}
          <span className="text-purple-400 font-semibold">HTML, CSS</span>, and{" "}
          <span className="text-pink-400 font-semibold">JavaScript</span>. Click
          the GitHub icon to explore all of them!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* GitHub Link */}
          <motion.a
            href="https://github.com/Vivekpatidar137/My-Practice-Projects-HTML-CSS-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 p-6 rounded-full hover:bg-purple-500 transition-all shadow-lg"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaGithub className="w-10 h-10" />
          </motion.a>

          {/* Project Names Slider */}
          <div className="w-full md:w-2/3 overflow-hidden relative">
            <div className="whitespace-nowrap animate-marquee text-xl text-gray-300 font-medium">
              {projectNames.map((name, index) => (
                <span key={index} className="inline-block mx-6">
                  {name}
                </span>
              ))}
              {/* Duplicate for smooth loop */}
              {projectNames.map((name, index) => (
                <span key={`loop-${index}`} className="inline-block mx-6">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
