import React from "react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-neutral-950 w-full py-20 px-4 md:px-16 selection:bg-teal-500/30 selection:text-teal-200 overflow-hidden relative"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --- RESUME HEADER --- */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 inline-block">
          MY CREDENTIALS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Resume
        </h1>
        <div className="w-16 h-[3px] bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto my-5 rounded-full"></div>
        <p className="text-neutral-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Passionate Full-Stack Developer specializing in modern web applications,
          AI-integrated systems, and scalable software solutions using React,
          Node.js, Express, Python, and modern development technologies.
        </p>
      </div>

      {/* --- TWO-COLUMN GRID --- */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-12">

          {/* Summary Block */}
          <div className="bg-white/[0.01] backdrop-blur-md border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-teal-500 pl-4 mb-6 tracking-wide">
              Professional Summary
            </h2>
            <h3 className="text-xl font-bold text-white mb-3">
              Fekadu Asafew
            </h3>
            <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-4">
              Full-Stack Developer with hands-on experience building responsive web applications,
              AI-powered systems, and scalable digital solutions. Skilled in frontend and backend
              development using React.js, Node.js, Express.js, JavaScript, Python, Laravel,
              Tailwind CSS, and MySQL.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6">
              Passionate about solving real-world problems through technology, creating clean user
              experiences, and developing secure, high-performance applications.
            </p>

            {/* Contact Metadata Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-neutral-400 border-t border-white/[0.05] pt-5">
              <li className="flex items-center gap-2">
                <span className="text-teal-400">📍</span> Addis Ababa / Ethiopia
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">📞</span> +251 945 382 096
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">✉️</span> fekaduasafew57@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">💻</span> GitHub: fekadu21-next
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <span className="text-teal-400">🌐</span> Portfolio: yourportfolio.com
              </li>
            </ul>
          </div>

          {/* Education Block */}
          <div className="bg-white/[0.01] backdrop-blur-md border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-teal-500 pl-4 mb-6 tracking-wide">
              Education
            </h2>
            <div className="relative border-l border-neutral-800 pl-6 ml-2">
              {/* Decorative Timeline Node */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_#1abc9c]" />

              <h3 className="text-lg md:text-xl font-bold text-white">
                Bachelor of Science in Computer Science
              </h3>
              <div className="flex flex-wrap gap-2 items-center my-2">
                <span className="text-sm font-semibold text-teal-400">Debre Berhan University</span>
                <span className="text-xs text-neutral-500 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
                  Expected 2026
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base mt-3">
                Specialized in software engineering, full-stack web development, data structures,
                algorithms, database systems, mobile app development, and intelligent software systems.
              </p>
            </div>
          </div>

          {/* Technical Skills Categorized Badges */}
          <div className="bg-white/[0.01] backdrop-blur-md border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-teal-500 pl-4 mb-6 tracking-wide">
              Technical Skills
            </h2>
            <div className="space-y-5 text-sm">
              {[
                { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
                { category: "Backend", items: ["Node.js", "Express.js", "Laravel", "REST APIs"] },
                { category: "Programming", items: ["JavaScript", "Python", "Java", "PHP"] },
                { category: "Database", items: ["MySQL", "MongoDB"] },
                { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
                { category: "Specialization", items: ["Full-Stack Dev", "AI Integration", "Mobile Apps"] }
              ].map((skillset, idx) => (
                <div key={idx} className="border-b border-white/[0.03] last:border-0 pb-3 last:pb-0">
                  <strong className="text-neutral-200 block mb-2 text-xs uppercase tracking-wider text-teal-400">
                    {skillset.category}
                  </strong>
                  <div className="flex flex-wrap gap-1.5">
                    {skillset.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="bg-white/[0.03] border border-white/[0.06] text-neutral-300 px-2.5 py-1 rounded-md text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-12">

          {/* Experience Block */}
          <div className="bg-white/[0.01] backdrop-blur-md border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-teal-500 pl-4 mb-6 tracking-wide">
              Professional Experience
            </h2>

            {/* Internship */}
            <div className="relative border-l border-neutral-800 pl-6 ml-2 mb-8">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_10px_#1abc9c]" />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Software Development Intern
              </h3>
              <div className="flex flex-wrap gap-2 items-center my-1.5">
                <span className="text-sm font-medium text-neutral-300">Brana Software Solution</span>
                <span className="text-xs text-neutral-500 font-mono">Addis Ababa</span>
                <span className="text-xs text-teal-400 font-medium px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20">
                  2025 – Present
                </span>
              </div>
              <ul className="list-none text-neutral-400 space-y-2.5 text-sm md:text-base mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Contributed to real-world software development projects using modern web technologies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Built and improved responsive UI components using React.js and Tailwind CSS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Collaborated with development teams on backend APIs, debugging, and system optimization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Applied software engineering principles to create scalable and maintainable applications.</span>
                </li>
              </ul>
            </div>

            {/* Freelance / Personal Projects */}
            <div className="relative border-l border-neutral-800 pl-6 ml-2">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              <h3 className="text-lg md:text-xl font-bold text-white">
                Full-Stack Developer
              </h3>
              <div className="flex flex-wrap gap-2 items-center my-1.5">
                <span className="text-sm font-medium text-neutral-300">Personal Projects</span>
                <span className="text-xs text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Self-Driven
                </span>
              </div>
              <ul className="list-none text-neutral-400 space-y-2.5 text-sm md:text-base mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Developed AI-integrated systems including intelligent classification and management applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Built a Full-Stack University Attendance Management System using React, Node.js, Express, and MySQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                  <span>Designed responsive portfolio and business websites using React and Tailwind CSS.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Projects Block */}
          <div className="bg-white/[0.01] backdrop-blur-md border border-white/[0.05] p-6 md:p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <h2 className="text-xl md:text-2xl font-bold text-white border-l-4 border-teal-500 pl-4 mb-6 tracking-wide">
              Featured Projects
            </h2>
            <div className="space-y-5 text-sm md:text-base">
              {[
                {
                  title: "AI Age Classification System",
                  desc: "Deep learning application for age prediction using computer vision and transfer learning techniques."
                },
                {
                  title: "University Attendance Management System",
                  desc: "Full-stack attendance tracking system featuring user authentication, analytics dashboards, and responsive database architecture using React, Node.js, Express, and MySQL."
                },
                {
                  title: "Modern Portfolio Website",
                  desc: "Fully animated, premium responsive single-page portfolio layout featuring custom interactive user interface states built with React.js and Tailwind CSS."
                }
              ].map((proj, idx) => (
                <div key={idx} className="group border-b border-white/[0.04] last:border-none pb-4 last:pb-0">
                  <h3 className="font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-xs md:text-sm">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}