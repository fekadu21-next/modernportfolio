import React from "react";

export default function About() {
  const skills = [
    { name: "Node.js", level: "90%" },
    { name: "Python", level: "80%" },
    { name: "react native", level: "80%" },
    { name: "React.js", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Laravel", level: "80%" },
  ];

  const stats = [
    { number: "10+", label: "Technologies" },
    { number: "5+", label: "Projects" },
    { number: "Full Stack", label: "Specialization" },
    { number: "AI + Mobile", label: "Focus" },
  ];

  return (
    <section id="about" className="bg-white py-16 text-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold">
        About Me
      </h1>

      <div className="w-14 h-[3px] bg-[#4dc0b5] mx-auto my-3"></div>

      <p className="text-gray-700 mb-12 max-w-3xl mx-auto leading-8">
        Passionate Full-Stack Developer focused on building
        modern, scalable, AI-powered web and mobile
        applications that solve real-world problems and
        deliver impactful digital experiences.
      </p>

      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto gap-8">

        {/* Image */}
        <div className="shadow-md w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 text-left space-y-5">

          <h2 className="text-2xl font-semibold text-gray-800">
            <i>
              Full-Stack Developer | AI Engineer | Mobile App Developer
            </i>
          </h2>

          <p className="text-gray-700 leading-8">
            I am a passionate Full-Stack Developer with
            experience in designing and developing modern,
            responsive, and scalable web and mobile
            applications. I specialize in building
            intelligent systems integrated with Artificial
            Intelligence to create smart, efficient, and
            user-focused digital solutions.
          </p>

          <p className="text-gray-700 leading-8">
            My expertise includes frontend and backend
            development using React.js, Node.js, Express.js,
            Laravel, JavaScript, Python, Tailwind CSS,
            and modern database technologies. I enjoy
            transforming complex ideas into clean,
            functional, and high-performance applications.
          </p>

          <p className="text-gray-700 leading-8">
            I continuously improve my technical skills and
            stay updated with emerging technologies to build
            secure, scalable, and innovative software
            solutions that create meaningful impact.
          </p>

          {/* Personal Info */}
          <div className="flex flex-col md:flex-row gap-8 pt-4">

            <ul className="space-y-3">
              <li>
                <b>Age:</b> 23
              </li>

              <li>
                <b>Role:</b> Full-Stack Developer
              </li>

              <li>
                <b>Specialization:</b> AI Integrated Systems
              </li>

              <li>
                <b>Location:</b> Ethiopia
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <b>Experience:</b> Web & Mobile Development
              </li>

              <li>
                <b>Tech Stack:</b> React, Node.js, Python,
                Laravel, Tailwind CSS
              </li>

              <li>
                <b>Status:</b> Open to Opportunities
              </li>

              <li>
                <b>Focus:</b> Full Stack & AI Solutions
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold">
          Technical Skills
        </h2>

        <p className="text-gray-700 mt-3 mb-10">
          Experienced in building scalable, responsive,
          and high-performance applications using modern
          development technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="text-left">
              <div className="flex justify-between text-sm font-bold mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded">
                <div
                  className="bg-[#34B7A7] h-3 rounded"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Professional Overview
        </h2>

        <p className="text-gray-700 mt-4 mb-12">
          Dedicated to continuous learning, innovation,
          and delivering impactful technology solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-black">
                {s.number}
              </h1>

              <div className="w-5 h-[3px] bg-[#1abc9c] mt-3 mb-2"></div>

              <p className="text-gray-600 capitalize">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}