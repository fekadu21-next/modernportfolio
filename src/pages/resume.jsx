// src/pages/Resume.jsx
import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="bg-white w-full py-16 px-4 md:px-16">
      {/* Resume Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold">Resume</h1>
        <div className="w-16 h-1 bg-teal-500 mx-auto my-4"></div>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Motivated Computer Science student passionate about full-stack
          development, modern web technologies, and video editing.
        </p>
      </div>

      <div className="md:flex md:space-x-16">
        {/* Left Column */}
        <div className="md:w-1/2 mb-10 md:mb-0 space-y-8">
          {/* Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <h3 className="text-xl font-medium mb-2">Fekadu Asafew</h3>
            <p className="text-gray-700 mb-1">
              Full-Stack Web Developer and Video Editor with strong practical
              skills
            </p>
            <p className="text-gray-700 mb-1">
              in building efficient, user-friendly web applications and
              multimedia content.
            </p>
            <p className="text-gray-700 mb-3">
              Currently completing a Bachelor's degree in Computer Science.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Gonder, Ethiopia</li>
              <li>+251 945 382 096</li>
              <li>fekaduasafew57@gmail.com</li>
              <li>GitHub: fekadu21-next</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <h3 className="text-xl font-medium mb-1">
              Bachelor of Science in Computer Science
            </h3>
            <h4 className="italic text-gray-600 mb-1">
              Debre Berhan University, Debre Berhan, Ethiopia
            </h4>
            <h4 className="italic text-gray-600 mb-2">
              Expected Graduation: 2026
            </h4>
            <p className="text-gray-700 mb-1">
              Focused on software development, full-stack engineering, and
              multimedia.
            </p>
            <p className="text-gray-700">
              Hands-on experience in web development projects and video editing
              tools.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-8">
          {/* Professional Experience */}
          {/* Professional Experience */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Professional Experience
            </h2>

            {/* Full-Stack Developer */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-1">Full-Stack Developer</h3>
              <h4 className="italic text-gray-600 mb-2">
                EthioTech Solutions, Addis Ababa, Ethiopia
              </h4>
              <h4 className="italic text-gray-600 mb-2">July 2024 – Present</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Built and maintained responsive web applications using HTML,
                  CSS, JavaScript, React, and Node.js.
                </li>
                <li>
                  Developed and integrated RESTful APIs to enhance user
                  interaction and overall experience.
                </li>
                <li>
                  Collaborated with the team to debug, optimize, and improve
                  front-end and back-end code.
                </li>
                {/* <li>
                  Participated in agile development workflows, including daily
                  standups and code reviews.
                </li>
                <li>
                  Ensured applications are scalable, maintainable, and
                  user-friendly across multiple devices.
                </li> */}
              </ul>
            </div>

            {/* Freelance & Personal Projects */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-1">
                Freelance Web Developer & Video Editor
              </h3>
              <h4 className="italic text-gray-600 mb-2">
                Remote | Self-Employed
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Designed and developed custom websites and web apps for
                  clients focusing on usability and responsiveness.
                </li>
                <li>
                  Created engaging video content for projects using modern
                  editing tools.
                </li>
                <li>
                  Maintained a personal portfolio to showcase full-stack and
                  multimedia projects.
                </li>
                <li>
                  Worked directly with clients to gather requirements and
                  deliver solutions on time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
