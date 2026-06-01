// src/pages/Resume.jsx
import React from "react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-white w-full py-16 px-4 md:px-16"
    >
      {/* Resume Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Resume
        </h1>

        <div className="w-16 h-1 bg-teal-500 mx-auto my-4"></div>

        <p className="text-gray-700 max-w-3xl mx-auto leading-8">
          Passionate Full-Stack Developer specializing in
          modern web applications, AI-integrated systems,
          and scalable software solutions using React,
          Node.js, Express, Python, and modern development
          technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14">
        {/* LEFT COLUMN */}
        <div className="space-y-10">
          {/* Summary */}
          <div>
            <h2 className="text-2xl font-semibold border-l-4 border-teal-500 pl-3 mb-4">
              Professional Summary
            </h2>

            <h3 className="text-xl font-semibold mb-2">
              Fekadu Asafew
            </h3>

            <p className="text-gray-700 leading-8">
              Full-Stack Developer with hands-on experience
              building responsive web applications,
              AI-powered systems, and scalable digital
              solutions. Skilled in frontend and backend
              development using React.js, Node.js,
              Express.js, JavaScript, Python, Laravel,
              Tailwind CSS, and MySQL.
            </p>

            <p className="text-gray-700 leading-8 mt-3">
              Passionate about solving real-world problems
              through technology, creating clean user
              experiences, and developing secure,
              high-performance applications.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>
                📍 Addis Ababa / Ethiopia
              </li>

              <li>
                📞 +251 945 382 096
              </li>

              <li>
                ✉️ fekaduasafew57@gmail.com
              </li>

              <li>
                💻 GitHub: fekadu21-next
              </li>

              <li>
                🌐 Portfolio: https://buildwithfekadu.vercel.app/
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold border-l-4 border-teal-500 pl-3 mb-4">
              Education
            </h2>

            <div className="border-l-2 border-gray-300 pl-5">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>

              <h4 className="italic text-gray-600 mt-1">
                Debre Berhan University
              </h4>
              {/* 
              <p className="text-gray-600 mb-3">
                Expected Graduation: 2026
              </p> */}

              <p className="text-gray-700 leading-7">
                Specialized in software engineering,
                full-stack web development, data
                structures, algorithms, database systems,
                mobile app development, and intelligent
                software systems.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-semibold border-l-4 border-teal-500 pl-3 mb-4">
              Technical Skills
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Frontend:</strong> React.js,
                JavaScript, HTML5, CSS3, Tailwind CSS
              </p>

              <p>
                <strong>Backend:</strong> Node.js,
                Express.js, Laravel, REST APIs,fast api
              </p>

              <p>
                <strong>Programming:</strong> JavaScript,
                Python, Java, PHP
              </p>

              <p>
                <strong>Database:</strong> MySQL,
                MongoDB,Postgresql
              </p>

              <p>
                <strong>Tools:</strong> Git, GitHub,
                VS Code, Postman
              </p>

              <p>
                <strong>Specialization:</strong>
                Full-Stack Development, AI Integration,
                Mobile Applications
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {/* Experience */}
          <div>
            <h2 className="text-2xl font-semibold border-l-4 border-teal-500 pl-3 mb-5">
              Professional Experience
            </h2>

            {/* Internship */}
            <div className="border-l-2 border-gray-300 pl-5 mb-8">
              <h3 className="text-xl font-semibold">
                Software Development Intern
              </h3>

              <h4 className="italic text-gray-600">
                fanaye technology place — Addis Ababa
              </h4>

              {/* <p className="text-gray-600 mb-3">
                2025 – Present
              </p> */}

              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-7">
                <li>
                  Contributed to real-world software
                  development projects using modern web
                  technologies.
                </li>

                <li>
                  Built and improved responsive UI
                  components using React.js and Tailwind
                  CSS.
                </li>

                <li>
                  Collaborated with development teams on
                  backend APIs, debugging, and system
                  optimization.
                </li>

                <li>
                  Applied software engineering principles
                  to create scalable and maintainable
                  applications.
                </li>
              </ul>
            </div>

            {/* Freelance / Personal Projects */}
            <div className="border-l-2 border-gray-300 pl-5">
              <h3 className="text-xl font-semibold">
                Full-Stack Developer — Personal Projects
              </h3>

              <h4 className="italic text-gray-600">
                Self-Driven Development
              </h4>

              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 leading-7">
                <li>
                  Developed AI-integrated systems
                  including intelligent classification
                  and management applications.
                </li>

                <li>
                  Built a Full-Stack University
                  Attendance Management System using
                  React, Node.js, Express, and MySQL.
                </li>

                <li>
                  Designed responsive portfolio and
                  business websites using React and
                  Tailwind CSS.
                </li>

                <li>
                  Developed scalable backend APIs and
                  database-driven systems for real-world
                  problem solving.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold border-l-4 border-teal-500 pl-3 mb-4">
              Featured Projects
            </h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">
                  AI Age Classification System
                </h3>

                <p>
                  Deep learning application for age
                  prediction using computer vision and
                  transfer learning techniques.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  University Attendance Management
                  System
                </h3>

                <p>
                  Full-stack attendance tracking system
                  using React, Node.js, Express, and
                  MySQL.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  project management system
                </h3>

                <p>
                  full stack project management system
                  with React.js,Tailwind CSS  laravel and postgresql.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}