import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Sparkle } from 'phosphor-react';
import { BackgroundCircles, BottomLine, Gradient} from '../design/Hero'
import { heroIcons} from '../constants'


const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  // Animate intro on mount
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial invisible and offset state
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 40,
      filter: 'blur(12px)',
      transformOrigin: 'center center',
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 80,
      filter: 'blur(16px)',
      transformOrigin: 'center center',
    });

    // Sequential fade-in with smooth easing
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'expo.out',
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'expo.out',
        },
        '-=0.7'
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'expo.out',
        },
        '-=0.6'
      )
      .to(
        splineRef.current,
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'expo.out',
        },
        '-=1'
      );

    // Subtle floating effect on CTA button
    gsap.to(ctaRef.current, {
      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  // Cursor tracking and parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate relative position [-1, 1]
      const moveX = (x / rect.width) * 2 - 1;
      const moveY = (y / rect.height) * 2 - 1;

      // Parallax movement for floating orbs
      gsap.to('.hero-cursor-orb', {
        x: moveX * 15,
        y: moveY * 15,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      return () => heroEl.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker"
    >
      {/* Background circles container with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10 pointer-events-none">
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>

      {/* Gradient overlays */}
      <Gradient />

      {/* Bottom decorative line and plus icons */}
      <BottomLine />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <BackgroundCircles />

          {/* Left text block */}
          <div className="text-center lg:text-left space-y-8">
            <h1
              ref={headlineRef}
              className="text-6xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight select-none"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#a855f7] via-purple-300 to-[#9333ea] bg-clip-text text-transparent drop-shadow-[0_0_12px_#c084fc]">
                <br></br>
                Hayley Treutens
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
                Software Developer
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-l md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about building smart, seamless software powered by AI.{' '}
              I love crafting clean, elegant code that brings intelligent systems to life and bridging logic, creativity, and real-world impact through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                ref={ctaRef}
                onClick={() => window.open('..//images/hayley-treutens-cv.pdf', '_blank')}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-black font-medium z-10
                          border-2 border-transparent hover:text-black transition
                          before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-cyan-300 before:z-[-1]  before:duration-300
                          hover:before:blur-sm hover:before:opacity-80"
              >
                <Sparkle weight="light" size={20} />
                Download my CV
              </button>
            </div>
          </div>

          {/* Right side with spline animation */}
          <div
            ref={splineRef}
            className="hidden lg:block w-full h-[600px] max-h-[80vh] rounded-xl overflow-hidden drop-shadow-lg"
          >
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-LCUtzpXQ5fyCb0pKjfsFPWm3/' 
              frameBorder='0'
              width='100%' 
              height='100%'>
            </iframe>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown weight="light" size={28} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
