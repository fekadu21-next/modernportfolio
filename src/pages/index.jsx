import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  const roles = ["a Fullstack Developer", "a Video Editor", "a UI/UX Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] bg-cover bg-center flex flex-col justify-center items-center pt-12 text-center px-4"
      style={{ backgroundImage: "url('/our image.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 -mt-2">
          I am Fekadu
        </h1>
        <div className="h-10 md:h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-xl md:text-2xl font-medium"
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
          ABOUT ME
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
