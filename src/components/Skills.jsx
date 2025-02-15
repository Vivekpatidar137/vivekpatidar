import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReactrouter,
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiTestinglibrary,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di"; // Fallback icon for Parcel

const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E]" />,
    },
    { name: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-[#1572B6]" /> },
    {
      name: "React Router",
      icon: <SiReactrouter className="w-10 h-10 text-[#CA4245]" />,
    },
    { name: "Redux", icon: <SiRedux className="w-10 h-10 text-[#764ABC]" /> },
    { name: "Vite", icon: <SiVite className="w-10 h-10 text-[#646CFF]" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-10 h-10 text-[#38BDF8]" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="w-10 h-10 text-[#FFCA28]" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="w-10 h-10 text-[#7952B3]" />,
    },
    {
      name: "Testing Library",
      icon: <SiTestinglibrary className="w-10 h-10 text-[#FF3E00]" />,
    },
    { name: "Git", icon: <SiGit className="w-10 h-10 text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="w-10 h-10 text-[#181717]" /> },
    { name: "Parcel", icon: <DiNodejs className="w-10 h-10 text-[#F8C300]" /> }, // Fallback icon
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-300 relative">
          Tech Stack
          <div
            className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "6px" }}
          />
          <div
            className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-transparent to-pink-500 rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "4px" }}
          />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative">{skill.icon}</div>
              </div>
              <p className="text-lg font-medium text-gray-300 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
