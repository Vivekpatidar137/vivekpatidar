import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Coding-Animation.json";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Animation Container */}
        <div className="lg:w-1/2">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-[500px] mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8">
          <h1
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            {`Hey, I'm `}
            <span className="text-white font-light">Vivek Patidar</span>
          </h1>

          <p
            className={`text-lg text-gray-300 leading-relaxed font-mono fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {`I'm a `}
            <span className="text-purple-400 font-medium">
              passionate front-end developer
            </span>
            {` with a focus on creating `}
            <span className="text-pink-400 font-medium">interactive</span>
            {` and `}
            <span className="text-purple-400 font-medium">user-friendly</span>
            {` web applications.`}
          </p>

          <p
            className={`text-lg text-gray-300 leading-relaxed font-mono fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {`My journey into web development began with a fascination for `}
            <span className="text-pink-400 font-medium">
              how websites are built
            </span>
            {`, how the `}
            <span className="text-purple-400 font-medium">
              Internet functions
            </span>
            {`, and the `}
            <span className="text-pink-400 font-medium">impact technology</span>
            {` can have on people's lives.`}
          </p>

          <p
            className={`text-lg text-gray-300 leading-relaxed font-mono fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            {`Since then, I've dedicated myself to honing my skills and building `}
            <span className="text-purple-400 font-medium">
              impactful solutions
            </span>
            {` using modern tools like `}
            <span className="text-pink-400 font-medium">React</span>
            {` and `}
            <span className="text-purple-400 font-medium">JavaScript</span>.
          </p>

          <p
            className={`text-lg text-gray-300 leading-relaxed font-mono fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            {`I'm excited to continue exploring `}
            <span className="text-pink-400 font-medium">new challenges</span>
            {` and `}
            <span className="text-purple-400 font-medium">opportunities</span>
            {` in this dynamic digital landscape.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
