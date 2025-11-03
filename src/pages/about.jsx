import React from "react";

export default function About() {
  const skills = [
    { name: "node js", level: "90%" },
    { name: "PYTHON", level: "70%" },
    { name: "tailwind", level: "90%" },
    { name: "React", level: "85%" },
    { name: "JAVASCRIPT", level: "80%" },
    { name: "laravel", level: "85%" },
  ];

  const stats = [
    { number: "2", label: "Clients" },
    { number: "3", label: "Projects" },
    { number: "1", label: "Level of Skill" },
    { number: "2", label: "Workers" },
  ];

  return (
    <section id="about" className="bg-white py-16 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <div className="w-14 h-[3px] bg-[#4dc0b5] mx-auto my-3"></div>
      <p className="text-gray-700 mb-12">
        Success arises from persistence and dedication, driven by passion for
        excellence.
      </p>

      {/* About Info */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto gap-8">
        <div className="shadow-md w-full md:w-1/2">
          <img
            src="/me.png"
            alt="me"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <i> AI Student & full stack Developer.</i>
          </h2>
          <p className="text-gray-700">
            I am a computer science student in Debre Berhan, Ethiopia,
            passionate about technology.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-3">
              <li>
                <b>Birthday:</b> 13 November 2003
              </li>
              <li>
                <b>Website:</b> www.alltechs.com
              </li>
              <li>
                <b>Phone:</b> +2519 45 38 20 96
              </li>
              <li>
                <b>City:</b> Gondor, Ethiopia
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <b>Age:</b> 22
              </li>
              <li>
                <b>Degree:</b> Bachelor’s Degree
              </li>
              <li>
                <b>Phone:</b> +2519 45 38 20 96
              </li>
            </ul>
          </div>

          <p className="mt-4 text-gray-700">
            Balancing work and personal life can be challenging, requiring smart
            management of responsibilities.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="text-gray-700 mt-3 mb-10">
          Committed to continuous learning and modern technology.
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
        <h2 className="text-3xl font-semibold">Basic Informations</h2>
        <p className="text-gray-700 mt-4 mb-12">
          The journey of learning and disrupting technology continues and never
          stops.
        </p>

        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-black">{s.number}</h1>
              <div className="w-5 h-[3px] bg-[#1abc9c] mt-3 mb-2"></div>
              <p className="text-gray-600 capitalize">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
