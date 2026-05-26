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
      icon: (
        <FaLaptopCode className="w-12 h-12 mx-auto mb-4 text-teal-500" />
      ),
      hoverColor: "hover:bg-teal-50",
    },

    {
      title: "AI-Integrated Systems Development",
      desc: "I develop intelligent applications powered by Artificial Intelligence, including automation systems, predictive models, and smart digital solutions that solve real-world problems efficiently.",
      icon: (
        <FaBrain className="w-12 h-12 mx-auto mb-4 text-purple-500" />
      ),
      hoverColor: "hover:bg-purple-50",
    },

    {
      title: "Mobile App Development",
      desc: "I develop responsive and modern mobile applications focused on usability, performance, and seamless user experience across Android platforms and cross-platform technologies.",
      icon: (
        <FaMobileAlt className="w-12 h-12 mx-auto mb-4 text-blue-500" />
      ),
      hoverColor: "hover:bg-blue-50",
    },

    {
      title: "Frontend Development & UI Design",
      desc: "I create clean, responsive, and modern user interfaces using React.js, JavaScript, Tailwind CSS, HTML, and CSS to deliver visually appealing and user-friendly experiences.",
      icon: (
        <FaCode className="w-12 h-12 mx-auto mb-4 text-orange-500" />
      ),
      hoverColor: "hover:bg-orange-50",
    },

    {
      title: "Backend Development & API Integration",
      desc: "I design secure backend systems, RESTful APIs, authentication systems, and server-side logic using Node.js, Express.js, Laravel, and database technologies.",
      icon: (
        <FaServer className="w-12 h-12 mx-auto mb-4 text-red-500" />
      ),
      hoverColor: "hover:bg-red-50",
    },

    {
      title: "Database Design & System Optimization",
      desc: "I design efficient database structures, optimize system performance, debug applications, and improve scalability for reliable and high-performing software solutions.",
      icon: (
        <FaDatabase className="w-12 h-12 mx-auto mb-4 text-green-500" />
      ),
      hoverColor: "hover:bg-green-50",
    },
  ];

  return (
    <section id="services" className="bg-white w-full py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Services
        </h1>

        <div className="w-16 h-1 bg-teal-500 mx-auto my-4"></div>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-8">
          Delivering innovative, scalable, and modern
          software solutions through Full-Stack Development,
          Artificial Intelligence, Mobile Applications,
          and high-performance system architecture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${service.hoverColor}`}
          >
            {service.icon}

            <h2 className="text-xl font-semibold text-center mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 text-center leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}