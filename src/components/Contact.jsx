import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900  text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-300 relative">
          {`Let's Connect!`}
          <div
            className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "6px" }}
          />
          <div
            className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 w-36 h-2 bg-gradient-to-r from-transparent to-pink-500 rounded-full"
            style={{ borderRadius: "50% 50% 0 0", height: "4px" }}
          />
        </h2>

        <div className="max-w-lg mx-auto relative">
          <motion.div
            className="bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-700 relative transition-all duration-300 hover:shadow-purple-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <div className="text-center space-y-3">
              <p className="text-lg text-gray-300">Feel free to reach out!</p>
              <p className="text-gray-400 hover:text-purple-400 transition">
                ✉️{" "}
                <a href="mailto:vivekpatidar775@gmail.com?subject=Let's Connect&body=Hi Vivek, I wanted to reach out to you regarding...">
                  vivekpatidar775@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700">
              <motion.a
                href="https://github.com/Vivekpatidar137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-purple-500 p-3 rounded-full transition-all shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <FaGithub className="w-7 h-7" />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-blue-500 p-3 rounded-full transition-all shadow-md"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <FaLinkedin className="w-7 h-7" />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-blue-400 p-3 rounded-full transition-all shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <FaTwitter className="w-7 h-7" />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-pink-500 p-3 rounded-full transition-all shadow-md"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <FaInstagram className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
