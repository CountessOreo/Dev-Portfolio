import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Starfield from "../design/Starfield";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSecton";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image fly-in
      gsap.fromTo(
        imageRef.current,
        { x: -80, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 95%",
          },
        }
      );

      // Content staggered animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { x: 60, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-32 pb-0 relative overflow-hidden will-change-transform"
    >
      <Starfield />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div ref={imageRef} className="relative text-center lg:text-left will-change-transform">
            <div className="relative inline-block">
              <div className="rounded-full overflow-hidden" style={{ width: '500px', height: '600px' }}>
                <img
                  src="/Images/portfolio.png"
                  alt="Hayley - Software Developer"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Glow effects */}
              <div className="absolute -inset-4 rounded-full bg-purple-500 blur-3xl opacity-20 pointer-events-none z-[-1]" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -inset-4 rounded-full bg-blue-500 blur-3xl opacity-20 pointer-events-none z-[-1]"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-8 will-change-transform">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I’m a final-year BSc Computer Science student specializing in Software Engineering at Belgium Campus ITVersity.
                  I’m deeply passionate about crafting impactful software solutions and exploring the transformative potential of Artificial Intelligence and Machine Learning.
                </p>

                <p>
                  Throughout my academic journey, I’ve built a strong foundation in both theoretical computer science and hands-on software engineering.
                  My growing interest in intelligent systems has led me to focus on full-stack development, AI-powered applications, and immersive, user-centered experiences.
                </p>

                <p>
                  I’m driven by more than just clean, efficient code. I aim to build systems that are purposeful, intuitive, and just a little bit magical.
                  Whether it's designing smooth user interfaces or experimenting with AI models, I see every line of code as part of a bigger creative vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <SkillsSection />
      </div>
    </section>
  );
};

export default AboutSection;
