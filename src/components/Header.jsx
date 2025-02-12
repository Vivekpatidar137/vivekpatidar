const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Full Name with Slower Letter-by-Letter Animation */}
        <div className="text-3xl font-mono font-light">
          {"Vivek Patidar".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block text-gray-300"
              style={{
                animation: `letterReveal 1.2s ease-out ${
                  index * 0.15
                }s forwards`, // Slower animation
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {char === " " ? "\u00A0" : char}{" "}
              {/* Replace spaces with non-breaking spaces */}
            </span>
          ))}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-purple-400">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
