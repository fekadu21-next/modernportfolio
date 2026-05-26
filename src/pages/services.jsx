import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "I build scalable, secure, and high-performance full-stack web applications using React.js, Node.js, Express.js, Laravel, and modern databases. From frontend interfaces to backend architecture, I deliver complete digital solutions.",
      icon: <FaLaptopCode className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-teal-400 text-teal-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] group-hover:border-teal-500/30",
    },
    {
      title: "AI-Integrated Systems Development",
      desc: "I develop intelligent applications powered by Artificial Intelligence, including automation systems, predictive models, and smart digital solutions that solve real-world problems efficiently.",
      icon: <FaBrain className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-purple-400 text-purple-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-purple-500/30",
    },
    {
      title: "Mobile App Development",
      desc: "I develop responsive and modern mobile applications focused on usability, performance, and seamless user experience across Android platforms and cross-platform technologies.",
      icon: <FaMobileAlt className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-blue-400 text-blue-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30",
    },
    {
      title: "Frontend Development & UI Design",
      desc: "I create clean, responsive, and modern user interfaces using React.js, JavaScript, Tailwind CSS, HTML, and CSS to deliver visually appealing and user-friendly experiences.",
      icon: <FaCode className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-orange-400 text-orange-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group-hover:border-orange-500/30",
    },
    {
      title: "Backend Development & API Integration",
      desc: "I design secure backend systems, RESTful APIs, authentication systems, and server-side logic using Node.js, Express.js, Laravel, and database technologies.",
      icon: <FaServer className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-red-400 text-red-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group-hover:border-red-500/30",
    },
    {
      title: "Database Design & System Optimization",
      desc: "I design efficient database structures, optimize system performance, debug applications, and improve scalability for reliable and high-performing software solutions.",
      icon: <FaDatabase className="w-12 h-12 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />,
      accentColor: "group-hover:text-green-400 text-green-500",
      glowBg: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:border-green-500/30",
    },
  ];

  return (
    <section
      id="services"
      className="bg-neutral-950 w-full py-20 px-4 md:px-16 selection:bg-teal-500/30 selection:text-teal-200 overflow-hidden relative"
    >
      {/* Background radial gradient flares */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* --- HEADER --- */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 inline-block">
          WHAT I OFFER
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Services
        </h1>
        <div className="w-16 h-[3px] bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto my-5 rounded-full"></div>
        <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Delivering innovative, scalable, and modern software solutions through
          Full-Stack Development, Artificial Intelligence, Mobile Applications,
          and high-performance system architecture.
        </p>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`group bg-white/[0.01] backdrop-blur-md rounded-2xl p-8 border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer ${service.glowBg}`}
          >
            {/* Dynamic Colored Icon */}
            <div className={`${service.accentColor} transition-colors duration-300`}>
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-center text-white mb-4 tracking-wide group-hover:text-white transition-colors duration-300">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-neutral-400 text-center text-sm md:text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300精密">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}