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
            className={`text-4xl md:text-6xl font-extrabold tracking-tighter fade-in-text ${
              isMounted ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
              {`Hey, I'm `}
            </span>
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-light">
              Vivek Patidar
            </span>
          </h1>

          <div className="space-y-6">
            <p
              className={`text-lg md:text-xl text-gray-300 leading-relaxed font-medium fade-in-text ${
                isMounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              {`I'm a `}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                passionate front-end developer
              </span>
              {` with a focus on creating `}
              <span className="text-pink-400 font-semibold">interactive</span>
              {` and `}
              <span className="text-purple-400 font-semibold">
                user-friendly
              </span>
              {` web applications.`}
            </p>

            <p
              className={`text-lg md:text-xl text-gray-300 leading-relaxed font-medium fade-in-text ${
                isMounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              {`My journey into web development began with a fascination for `}
              <span className="text-pink-400 font-semibold underline decoration-2 decoration-pink-400 underline-offset-4">
                how websites are built
              </span>
              {`, how the `}
              <span className="text-purple-400 font-semibold underline decoration-2 decoration-purple-400 underline-offset-4">
                Internet functions
              </span>
              {`, and the `}
              <span className="text-pink-400 font-semibold underline decoration-2 decoration-pink-400 underline-offset-4">
                impact technology
              </span>
              {` can have on people's lives.`}
            </p>

            <p
              className={`text-lg md:text-xl text-gray-300 leading-relaxed font-medium fade-in-text ${
                isMounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              {`Since then, I've dedicated myself to honing my skills and building `}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                impactful solutions
              </span>
              {` using modern tools like `}
              <span className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-0.5">
                React
              </span>
              {` and `}
              <span className="text-purple-400 font-semibold border-b-2 border-purple-400 pb-0.5">
                JavaScript
              </span>
              .
            </p>

            <p
              className={`text-lg md:text-xl text-gray-300 leading-relaxed font-medium fade-in-text ${
                isMounted ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              {`I'm excited to continue exploring `}
              <span className="text-pink-400 font-semibold">
                new challenges
              </span>
              {` and `}
              <span className="text-purple-400 font-semibold">
                opportunities
              </span>
              {` in this dynamic digital landscape.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
