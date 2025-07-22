import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Code,
  Stack,
  GitBranch,
  Database,
  FlowArrow,
  BookBookmark,
  ChartBar,
  Monitor,
  Buildings,
  Bug,
  RocketLaunch,
  PresentationChart,
  Brain,
  ClipboardText
} from "phosphor-react";

import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiSharp,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiJupyter,
  SiExpress,
  SiUnity,
  SiApache,
  SiFlask,
  SiTensorflow,
  SiDotnet
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  { label: "Frontend Development", icon: Code },
  { label: "Backend APIs", icon: FlowArrow },
  { label: "Databases", icon: Database },
  { label: "Full Stack", icon: Stack },
  { label: "Data Visualization", icon: ChartBar },
  { label: "Agile Methodologies", icon: FlowArrow },
  { label: "Technical Writing", icon: BookBookmark },
  { label: "Collaboration Tools", icon: Monitor },
  { label: "Version Control", icon: GitBranch },
  { label: "Documentation", icon: BookBookmark },
  { label: "Software Architecture", icon: Buildings },
  { label: "Testing & Debugging", icon: Bug },
  { label: "DevOps & CI/CD", icon: RocketLaunch },
  { label: "Soft Skills & Leadership", icon: PresentationChart },
  { label: "AI & Machine Learning", icon: Brain },
  { label: "Project Management", icon: ClipboardText }
];

const technologies = [
  { name: "JavaScript", color: "text-yellow-400", icon: SiJavascript },
  { name: "React", color: "text-cyan-400", icon: SiReact },
  { name: "MongoDB", color: "text-green-500", icon: SiMongodb },
  { name: "Git", color: "text-orange-500", icon: SiGit },
  { name: "HTML", color: "text-red-500", icon: SiHtml5 },
  { name: "CSS", color: "text-blue-300", icon: SiCss3 },
  { name: "Node.js", color: "text-green-400", icon: SiNodedotjs },
  { name: "Tailwind", color: "text-teal-400", icon: SiTailwindcss },
  { name: "Java", color: "text-orange-400", icon: FaJava },
  { name: "C#", color: "text-purple-400", icon: SiSharp },
  { name: "Python", color: "text-yellow-300", icon: SiPython },
  { name: "PostgreSQL", color: "text-blue-700", icon: SiPostgresql },
  { name: "MySQL", color: "text-blue-500", icon: SiMysql },
  { name: "Jupyter", color: "text-orange-500", icon: SiJupyter },
  { name: "Express.js", color: "text-pink-500", icon: SiExpress },
  { name: "Unity", color: "text-gray-400", icon: SiUnity },
  { name: "Tomcat", color: "text-red-400", icon: SiApache },
  { name: "Flask", color: "text-pink-500", icon: SiFlask },
  { name: "TensorFlow", color: "text-orange-300", icon: SiTensorflow },
  { name: "ASP.NET", color: "text-blue-500", icon: SiDotnet }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4 w-full flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <DotLottieReact
          src="https://lottie.host/8370f306-7681-44f3-aeee-5739e0a3264b/91f2171LDo.lottie"
          loop
          autoplay
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold mb-16 text-white">Skills & Expertise</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#1c1c2b] hover:bg-[#26263b] transition rounded-xl py-6 px-4 border border-white/5"
            >
              <skill.icon size={28} className="mb-2 text-white/80" />
              <p className="text-sm font-medium text-white text-center">{skill.label}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mx-auto bg-[#1a1a2c] border border-white/5 rounded-2xl p-8 max-w-4xl">
          <h3 className="text-2xl font-semibold mb-6 text-white">Technologies I Work With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center gap-3 px-6 py-3 rounded-full 
                  bg-black hover:bg-black/30
                  text-white shadow-md
                  hover:scale-105 hover:shadow-xl
                  transition-transform duration-300 ease-in-out
                  cursor-default select-none
                  w-full border border-white
                "
                title={tech.name}
                aria-label={tech.name}
              >
                <tech.icon className={`${tech.color} drop-shadow-lg`} size={22} />
                <span className="whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
