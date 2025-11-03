import React from "react";
import {
  FiExternalLink,
  FiGithub,
  FiDatabase,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import { FaLaravel, FaReact, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Task Management System",
    description:
      "A full-stack web app for managing tasks with real-time updates, notifications, and role-based dashboards using Laravel API and React.",
    tech: ["React", "Laravel", "MySQL", "Pusher"],
    icon: <FaServer className="text-teal-500 text-6xl" />,
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager-demo.netlify.app",
  },
  {
    id: 2,
    title: "Inventory Management App",
    description:
      "A business inventory solution built with Laravel Livewire for managing products, restocks, and orders efficiently.",
    tech: ["Laravel", "Livewire", "TailwindCSS", "MySQL"],
    icon: <FaLaravel className="text-red-500 text-6xl" />,
    github: "https://github.com/yourusername/inventory-app",
    demo: "https://inventory-demo.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern and animated personal portfolio showcasing projects, contact info, and skills using React, Tailwind, and Framer Motion.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    icon: <FaReact className="text-sky-400 text-6xl animate-spin-slow" />,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-16 min-h-screen"
    >
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl font-semibold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300 text-lg italic">
          Building impactful full-stack applications with clean design &
          efficient code
        </p>
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            {/* Icon */}
            <div className="mb-6">{project.icon}</div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-center gap-6 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FiGithub className="text-lg" /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-teal-500 hover:text-teal-400 transition"
              >
                Live Demo <FiExternalLink className="text-lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
