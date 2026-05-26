import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSection = () => {
  // Fixed the formatting spacing typo here
  const roles = ["a Fullstack Developer", "Mobile App Developer", "AI Enthusiast"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // ✅ Function to scroll to About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 overflow-hidden selection:bg-teal-500/30 selection:text-teal-200"
      style={{ backgroundImage: "url('/our image.png')" }}
    >
      {/* Cinematic dark overlay with a vignette depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950"></div>

      {/* Ambient glowing backdrop mesh to elevate contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Premium Glassmorphic Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-16 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">

        {/* Animated Subtitle Tag */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3"
        >
          WELCOME TO MY PORTFOLIO
        </motion.span>

        {/* Main Header */}
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          I am <span className="bg-gradient-to-r from-white via-neutral-200 to-teal-400 bg-clip-text text-transparent">Fekadu</span>
        </h1>

        {/* Fixed-height Animated Text Wrapper */}
        <div className="h-10 md:h-14 overflow-hidden flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-medium tracking-wide text-neutral-300"
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* High-End Interactive Action Button */}
        <motion.button
          onClick={handleScrollToAbout}
          whileHover={{ scale: 1.03, boxShadow: "0px 0px 25px rgba(20, 184, 166, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="relative group bg-gradient-to-r from-teal-500 to-emerald-500 text-neutral-950 text-xs md:text-sm tracking-[0.15em] font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          {/* Subtle button sheen overlay */}
          <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full scale-0 transition-all duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
          ABOUT ME
        </motion.button>
      </div>

      {/* Animated Minimalist Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <div className="w-6 h-10 border-2 border-white/30 group-hover:border-teal-400 rounded-full flex justify-center p-1.5 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-teal-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;