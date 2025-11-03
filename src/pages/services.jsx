import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaBug,
  FaPlug,
} from "react-icons/fa";

export default function Services() {
  const services1 = [
    {
      title: "Full-Stack Web Development",
      desc: "I develop complete web applications, handling both client-side and server-side logic. From responsive interfaces to backend databases, I bring full functionality to life.",
      icon: <FaLaptopCode className="w-12 h-12 mx-auto mb-4 text-teal-500" />,
      hoverColor: "hover:bg-teal-100",
    },
    {
      title: "Responsive Web Design",
      desc: "I design websites that look great and perform well on all devices and screen sizes. Every layout I build is mobile-friendly, fast, and user-focused.",
      icon: <FaMobileAlt className="w-12 h-12 mx-auto mb-4 text-purple-500" />,
      hoverColor: "hover:bg-purple-100",
    },
    {
      title: "Front-End Development",
      desc: "I craft clean, interactive user interfaces using HTML, CSS, JavaScript, and React. My focus is on performance, accessibility, and engaging design.",
      icon: <FaPaintBrush className="w-12 h-12 mx-auto mb-4 text-orange-500" />,
      hoverColor: "hover:bg-orange-100",
    },
  ];

  const services2 = [
    {
      title: "Back-End Integration",
      desc: "I connect front-end systems to servers, databases, and external APIs. Secure, scalable, and efficient data handling is my priority.",
      icon: <FaServer className="w-12 h-12 mx-auto mb-4 text-blue-500" />,
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "Website Optimization & Debugging",
      desc: "I improve website speed, responsiveness, and fix bugs for smooth user experiences. From code audits to performance tuning, I ensure your site runs at its best.",
      icon: <FaBug className="w-12 h-12 mx-auto mb-4 text-red-500" />,
      hoverColor: "hover:bg-red-100",
    },
    {
      title: "API Development & Integration",
      desc: "I design and implement RESTful APIs to connect systems and enhance functionality. Whether third-party or custom, I make sure your app communicates reliably.",
      icon: <FaPlug className="w-12 h-12 mx-auto mb-4 text-green-500" />,
      hoverColor: "hover:bg-green-100",
    },
  ];

  const renderServices = (services) =>
    services.map((s, idx) => (
      <div
        key={idx}
        className={`bg-white rounded-lg p-6 w-80 transform transition duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200 shadow-2xl ${s.hoverColor}`}
        onClick={(e) => e.preventDefault()} // prevents any accidental navigation
      >
        {s.icon}
        <h2 className="text-xl font-semibold text-center mb-2">{s.title}</h2>
        <p className="text-gray-600 text-center">{s.desc}</p>
      </div>
    ));

  return (
    <section id="services" className="bg-white w-full py-16">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-semibold">Services</h1>
        <div className="w-16 h-1 bg-teal-400 mx-auto my-3"></div>
        <p className="text-gray-700 text-lg">
          Full-stack web development delivering responsive, high-performance and
          user-focused solutions
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 px-4">
        {renderServices(services1)}
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 mt-12 px-4">
        {renderServices(services2)}
      </div>
    </section>
  );
}
