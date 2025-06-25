const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SpoonSwift",
      description:
        "A dynamic culinary exploration app featuring an interactive dish carousel, restaurant menus, and a seamless shopping cart experience. Built with React, Redux, and Tailwind for a responsive and engaging UI.",
      image: "src/assets/Project-SpoonSwift.png",
      link: "https://spoon-swift.vercel.app/",
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Parcel",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      id: 2,
      title: "StreamOracle",
      description:
        "An AI-powered movie recommendation web app with a Netflix-like UI. Discover movies by describing your preferences, watch trailer, and explore curated movie lists.",
      image: "src/assets/Project-StreamOracle.png",
      link: "https://stream-oracle.web.app/",
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Firebase",
        "TMDB API",
        "Gemini API",
      ],
    },
    {
      id: 3,
      title: "VidNova",
      description:
        "A modern, YouTube-like video streaming application utilizing the YouTube API. Features dynamic video suggestions, live chat, and an intuitive UI for an enhanced video streaming experience.",
      image: "src/assets/Project-VidNova.png",
      link: "https://vidnova.vercel.app/",
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Router",
        "YouTube API",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-300 relative">
          My Projects
          <div
            className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "6px" }}
          />
          <div
            className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-transparent to-pink-500 rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "4px" }}
          />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 mt-2 text-white font-medium rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80 transition-opacity duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
