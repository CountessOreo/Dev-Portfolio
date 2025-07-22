import React, { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo } from "phosphor-react";
import { projects } from "../data/projects";
import Link from 'next/link';

import {
  SiPython, SiUnity, SiApache, SiMysql, SiJupyter, SiTensorflow,
  SiFlask, SiSharp, SiHtml5, SiCss3, SiJavascript, SiDotnet,
  SiPostgresql, SiExpress, SiNodedotjs, SiMongodb, SiEjs, SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Icon map outside component to prevent re-creation
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
  "C#": <SiSharp className="text-purple-400" />,
  "ASP.NET": <SiDotnet className="text-blue-500" />,
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
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);
  const bgRef = useRef(null);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        projectsRef.current?.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 0.3,
          ease: "power1.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.technologies).flat())];
  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.technologies.includes(filter)
  );
  const visibleProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Lottie Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <DotLottieReact
          src="https://lottie.host/85856579-fa98-428d-8912-b876f078dba4/5crdtZkWNM.lottie"
          loop
          autoplay
        />
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-full h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
            fill="#0e0e1a"
          />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        {/* Filter Dropdown */}
        <div className="mb-12 text-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#1c1c2b] border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Project Cards */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} className="glass-card group cursor-pointer overflow-hidden">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* GitHub Button */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    >
                      <GithubLogo weight="bold" size={20} color="white" />
                    </a>
                  )}
                </div>

                {/* In Progress Badge */}
                {project.progress && (
                  <div className="absolute top-4 left-4 bg-purple-500 text-black text-xs px-3 py-1 rounded-full shadow-md font-bold">
                    In Progress
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-white/10"
                    >
                      {iconMap[tech]} <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
          <Link href="/projects" className="neon-button">
            View All Projects
          </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
