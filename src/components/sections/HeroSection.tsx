import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Sparkle } from 'phosphor-react';
import { BackgroundCircles, BottomLine, Gradient } from '../design/Hero';
import { heroIcons } from '../constants';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  // Animate intro on mount
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current, splineRef.current], {
      opacity: 0,
      y: 40,
    });

    tl.to([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: 'power2.out',
    });

    tl.to(
      splineRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=0.8'
    );

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
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const quickX = gsap.quickTo('.hero-cursor-orb', 'x', { duration: 0.4, ease: 'power3.out' });
    const quickY = gsap.quickTo('.hero-cursor-orb', 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const moveX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const moveY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      quickX(moveX * 15);
      quickY(moveY * 15);
    };

    heroEl.addEventListener('mousemove', handleMouseMove);
    return () => heroEl.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker will-change-transform"
    >
      <div ref={parallaxRef} className="absolute inset-0 -z-10 pointer-events-none">
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>

      <Gradient />
      <BottomLine />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <BackgroundCircles />

          {/* Left Text */}
          <div className="text-center lg:text-left space-y-8">
            <h1
              ref={headlineRef}
              className="text-6xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight select-none will-change-transform"
            >
              Hi, I'm
              <span className="bg-gradient-to-r from-[#a855f7] via-purple-300 to-[#9333ea] bg-clip-text text-transparent drop-shadow-[0_0_12px_#c084fc] block">
                Hayley Treutens
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
                Software Developer
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-l md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 will-change-transform"
            >
              Passionate about building smart, seamless software powered by AI. I love crafting clean, elegant code that brings intelligent systems to life and bridging logic, creativity, and real-world impact through technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                ref={ctaRef}
                onClick={() => window.open('/Images/hayley-treutens-cv.pdf', '_blank')}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-black font-medium z-10 border-2 border-transparent hover:text-black transition before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-cyan-300 before:z-[-1]  before:duration-300 hover:before:blur-sm hover:before:opacity-80"
              >
                <Sparkle weight="light" size={20} />
                Download my CV
              </button>
            </div>
          </div>

          {/* Right - Spline Embed */}
          <div
            ref={splineRef}
            className="hidden lg:block w-full h-[600px] max-h-[80vh] rounded-xl overflow-hidden drop-shadow-lg will-change-transform"
          >
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-LCUtzpXQ5fyCb0pKjfsFPWm3/"
              frameBorder="0"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown weight="light" size={28} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
