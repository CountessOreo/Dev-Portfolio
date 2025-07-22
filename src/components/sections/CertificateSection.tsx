import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import BadgeSection from "./BadgeSection";
import { badgesOnly } from "./BadgeSection";
import { Star } from "lucide-react";

const certificates = [
  {
    name: "Microsoft Python Certification Exam",
    provider: "Udemy",
    date: "In Progress" ,
  },
  {
    name: "AI & ML Fundamentals",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/ai-ml-fundamentals_badge.png",
    link: "/Certificates/AI and ML Fundamentals Certificate.pdf",
  },
  {
    name: "AI & ML Tools for Deep Learning",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/ai-ml-tools-for-deep-learning.png",
    link: "/Certificates/AI & ML Tools for deep Learning.pdf",
  },
  {
    name: "AI Agents A-Z",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/ai-agents-a-z.png",
    link: "/Certificates/AI Agents A-Z Certificate.pdf",
  },
  {
    name: "GenAI Essentials for Everyone",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/genai-essentials-for-everyone.png",
    link: "/Certificates/GenAI Fundamentals for Everyone Certificate.pdf",
  },
  {
    name: "Hugging Face for NLP",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/hugging-face-for-nlp.png",
    link: "/Certificates/Hugging Face for NLP Certificate.pdf",
  },
  {
    name: "Jumpstart Your AI Career",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/jumpstart-your-ai-career.png",
    link: "/Certificates/Jumpstart Your AI Career.pdf",
  },
  {
    name: "OOP in Python",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/oop-in-python.png",
    link: "/Certificates/OOP in Python.pdf",
  },
  {
    name: "Pandas in 4 Hours",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/pandas-in-4-hours.png",
    link: "/Certificates/Pandas in 4 Hours.pdf",
  },
  {
    name: "Python Kitchen",
    provider: "O'Reilly",
    date: "2025",
    badge: "/Badges/python-kitchen.png",
    link: "/Certificates/Python Kitchen.pdf",
  },
  {
    name: "Introduction to Generative AI",
    provider: "AWS",
    date: "2025",
    link: "/Certificates/Introduction to Generative AI.pdf",
  },
  {
    name: "Agentic Automation",
    provider: "Belgium Campus ITVersity",
    date: "2025",
    link: "/Certificates/Agentic Automation Certificate of Attendance.pdf",
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const CertificateSection = () => {
  const badges = certificates
    .filter(cert => cert.badge)
    .map(cert => ({ name: cert.name, src: cert.badge! }));

  return (
    <section
      id="certificates"
      className="relative pt-24 px-4 w-full flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DotLottieReact
          src="https://lottie.host/21385455-41c1-4bf2-a37f-d4e11bedef55/ViI2e7ftCD.lottie"
          loop
          autoplay
        />
        {/* Dark overlay for softening */}
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
      </div>

      {/* Gradient Fog for Transition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0e0e1a] via-[#0e0e1a]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0e1a] via-[#0e0e1a]/70 to-transparent" />
      </div>

      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
            fill="#0e0e1a"
          />
        </svg>
      </div>


    {/* Foreground Content */}
    <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center">
      <h2 className="text-4xl font-extrabold mb-16 text-white">Certifications</h2>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-[#1c1c2b] hover:bg-[#26263b] transition rounded-xl py-6 px-6 border border-white/5 shadow-md hover:shadow-xl text-left cursor-pointer backdrop-blur-md"
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">{cert.name}</h3>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">{cert.provider}</p>
                <p className="text-sm text-white/60">{cert.date}</p>
              </div>

              {cert.badge && (
                <img
                  src={cert.badge}
                  alt={`${cert.name} badge`}
                  className="w-8 h-8 object-contain ml-4"
                />
              )}
            </div>
            <p className="text-sm text-blue-700" ><br></br>Click Me</p>
          </motion.a>

        ))}
      </div>

      {/* Badge Section */}
      <div className="mt-20 w-full">
        <BadgeSection badges={badgesOnly} />
      </div>
    </div>
  </section>
  );
};

export default CertificateSection;
