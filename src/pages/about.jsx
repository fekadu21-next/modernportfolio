import React from "react";

export default function About() {
  const skills = [
    { name: "Node.js", level: "90%", color: "from-teal-500 to-emerald-500" },
    { name: "Python", level: "80%", color: "from-purple-500 to-indigo-500" },
    { name: "Tailwind CSS", level: "90%", color: "from-blue-500 to-cyan-500" },
    { name: "React.js", level: "90%", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", level: "85%", color: "from-yellow-500 to-orange-500" },
    { name: "Laravel", level: "80%", color: "from-red-500 to-rose-500" },
  ];

  const stats = [
    { number: "10+", label: "Technologies", glow: "shadow-teal-500/10" },
    { number: "5+", label: "Projects", glow: "shadow-purple-500/10" },
    { number: "Full Stack", label: "Specialization", glow: "shadow-blue-500/10" },
    { number: "AI + Mobile", label: "Focus", glow: "shadow-emerald-500/10" },
  ];

  return (
    <section
      id="about"
      className="bg-neutral-950 text-white py-24 px-4 md:px-16 relative overflow-hidden selection:bg-teal-500/30 selection:text-teal-200"
    >
      {/* Background Atmosphere Flares */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- MAIN HEADER --- */}
        <div className="text-center mb-20">
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 inline-block">
            MY STORY
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            About Me
          </h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto my-5 rounded-full"></div>
          <p className="text-neutral-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer focused on building modern, scalable,
            AI-powered web and mobile applications that solve real-world problems
            and deliver impactful digital experiences.
          </p>
        </div>

        {/* --- PROFILE PROFILE GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-28">

          {/* Animated Picture Frame */}
          <div className="lg:col-span-5 group relative mx-auto lg:mx-0 w-full max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-neutral-900 border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src="/me.png"
                alt="Profile"
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Bio Description Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
              Full-Stack Developer | AI Engineer | Mobile App Developer
            </h2>

            <div className="space-y-4 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              <p>
                I am a passionate Full-Stack Developer with experience in designing and
                developing modern, responsive, and scalable web and mobile applications.
                I specialize in building intelligent systems integrated with Artificial
                Intelligence to create smart, efficient, and user-focused digital solutions.
              </p>
              <p>
                My expertise includes frontend and backend development using React.js,
                Node.js, Express.js, Laravel, JavaScript, Python, Tailwind CSS, and modern
                database technologies. I enjoy transforming complex ideas into clean,
                functional, and high-performance applications.
              </p>
              <p>
                I continuously improve my technical skills and stay updated with emerging
                technologies to build secure, scalable, and innovative software solutions
                that create meaningful impact.
              </p>
            </div>

            {/* Structured Metadata Sheets */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
              <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 space-y-3 backdrop-blur-sm">
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Age:</span> <span className="text-neutral-200 font-semibold">23</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Role:</span> <span className="text-neutral-200 font-semibold">Full-Stack Developer</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Specialization:</span> <span className="text-neutral-200 font-semibold">AI Integrated Systems</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Location:</span> <span className="text-neutral-200 font-semibold">Ethiopia</span></div>
              </div>

              <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 space-y-3 backdrop-blur-sm">
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Experience:</span> <span className="text-neutral-200 font-semibold">Web & Mobile Dev</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Tech Stack:</span> <span className="text-neutral-200 font-semibold">React, Node, Python, Laravel</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Status:</span> <span className="text-teal-400 font-semibold">Open to Opportunities</span></div>
                <div className="text-sm"><span className="text-neutral-500 font-medium mr-2">Focus:</span> <span className="text-purple-400 font-semibold">Full Stack & AI Solutions</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TECHNICAL SKILLS SECTION --- */}
        <div className="py-20 border-t border-white/[0.06]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="text-neutral-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Experienced in building scalable, responsive, and high-performance
              applications using modern development technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2 group text-left">
                <div className="flex justify-between text-sm tracking-wide font-medium">
                  <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  <span className="text-neutral-400 font-mono group-hover:text-teal-400 transition-colors duration-300">{skill.level}</span>
                </div>
                <div className="w-full bg-neutral-900 border border-white/[0.04] h-[10px] rounded-full overflow-hidden p-[2px]">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-full rounded-full shadow-[0_0_12px_rgba(20,184,166,0.2)] transition-all duration-1000 ease-out`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- OVERVIEW STATS BLOCK --- */}
        <div className="py-20 border-t border-white/[0.06]">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Professional Overview
            </h2>
            <p className="text-neutral-400 mt-3 text-sm md:text-base">
              Dedicated to continuous learning, innovation, and delivering impactful technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`bg-white/[0.01] border border-white/[0.04] backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 ${s.glow}`}
              >
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 font-mono">
                  {s.number}
                </h1>
                <div className="w-6 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500 mt-4 mb-3 rounded-full"></div>
                <p className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide uppercase text-center">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}