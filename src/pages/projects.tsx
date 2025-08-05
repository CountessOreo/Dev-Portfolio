// pages/projects.tsx
import React from 'react';
import { GithubLogo } from 'phosphor-react';
import { projects } from '../components/data/projects';

import {
  SiPython,
  SiUnity,
  SiApache,
  SiMysql,
  SiJupyter,
  SiTensorflow,
  SiFlask,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDotnet,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiEjs,
  SiGit,
  SiBlazor,
  SiDatabricks, 
  SiBootstrap,
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";

const iconMap = {
  Python: <SiPython className="text-yellow-300" />,
  Unity: <SiUnity className="text-gray-400" />,
  Java: <FaJava className="text-orange-400" />,
  JDBC: <FaJava className="text-orange-400" />,
  Tomcat: <SiApache className="text-red-400" />,
  Flask: <SiFlask className="text-pink-500" />,
  NLTK: <span className="text-green-500 font-bold">NLTK</span>,
  TensorFlow: <SiTensorflow className="text-orange-300" />,
  Jupyter: <SiJupyter className="text-orange-500" />,
  'C#': <SiSharp className="text-purple-400" />,
  'ASP.NET': <SiDotnet className="text-blue-500" />,
  HTML: <SiHtml5 className="text-red-500" />,
  CSS: <SiCss3 className="text-blue-300" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  MySQL: <SiMysql className="text-blue-500" />,
  PostgreSQL: <SiPostgresql className="text-purple-700" />,
  "Express.js": <SiExpress className="text-pink-700" />,
  "Node.js": <SiNodedotjs className="text-green-400" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  EJS: <SiEjs className="text-blue-500" />,
  Git: <SiGit className="text-orange-500" />,
  Blazor: <SiBlazor className="text-purple-800" />,
  "Entity Framework Core" : <SiDotnet className="text-blue-500" />,
  "SQL Server" : <SiDatabricks className="text-red-500" />,
  Bootstrap : <SiBootstrap className="text-purple-800" />,
};

const ProjectsPage = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0e0e1a] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          All Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#1a1a2c] p-6 shadow-md border border-white/5 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl mb-6 border border-white/10"
              />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-sm text-white/80">{project.description}</p>

                <div className="text-sm text-white/60">
                  <span className="font-semibold text-white">Key Principles: </span>
                  <em>{project.principles}</em>
                </div>

                {project.features && (
                  <div>
                    <h4 className="font-semibold text-white mb-1">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4 items-center">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-white/10 text-white rounded-full border border-white/20"
                    >
                      <span className="inline-flex items-center align-middle text-lg">
                        {iconMap[tech] || <span className="opacity-50">?</span>}
                      </span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <GithubLogo weight="bold" size={20} color="white" />
                </a>
              )}
              
              {/* In Progress Badge */}
              {project.progress && (
                <div className="absolute top-4 left-4 bg-purple-500 text-black text-xs px-3 py-1 rounded-full shadow-md font-bold">
                  In Progress
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
