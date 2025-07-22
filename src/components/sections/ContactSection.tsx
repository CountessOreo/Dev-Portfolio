import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt } from 'phosphor-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        formRef.current?.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');

    emailjs.send(
      'service_0votzg6',
      'template_tereeeo',
      formData,
      'KefSThDw7xFiDzQc1'
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative pt-40 pb-5 px-6 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/d1b37fc8-9a88-4c12-990a-c27e2fe2378b/mn7kKPvRcN.lottie"
          loop
          autoplay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
          }}
        />
      </div>

      {/* SVG Wave */}
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

      {/* Foreground */}
      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Let's Connect
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
              <p className="text-muted-foreground text-lg">
                I'm a passionate computer science student eager to grow through real-world experience and mentorship. 
                <br /><br />
                If you're looking for a curious mind to join your team, collaborate on a project, or if you're open to offering guidance —  
                I’d love to hear from you.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h4 className="font-medium">Quick Details</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Based in Pretoria, SA</p>
                <p>🎓 Open to internships & mentorship</p>
                <p>⚡ Usually responds within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="glow-input">
              <label htmlFor="name" className="block text-sm font-medium mb-2 mt-2 ml-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="name"
                placeholder="e.g. Alex Mokoena"
                className="w-full px-4 py-3 bg-transparent border-0 focus:outline-none text-foreground placeholder-muted-foreground"
              />
            </div>

            <div className="glow-input">
              <label htmlFor="email" className="block text-sm font-medium mb-2 mt-2 ml-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="email"
                placeholder="e.g. alex@email.com"
                className="w-full px-4 py-3 bg-transparent border-0 focus:outline-none text-foreground placeholder-muted-foreground"
              />
            </div>

            <div className="glow-input">
              <label htmlFor="message" className="block text-sm font-medium mb-2 mt-2 ml-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Tell me about an opportunity, collaboration, or question you have..."
                className="w-full px-4 py-3 bg-transparent border-0 focus:outline-none text-foreground placeholder-muted-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="neon-button w-full flex items-center justify-center gap-2 hover:text-white transition-colors duration-300"
            >
              <PaperPlaneTilt weight="light" size={20} />
              {status === 'sending'
                ? 'Sending...'
                : status === 'success'
                ? 'Message Sent!'
                : status === 'error'
                ? 'Error Sending'
                : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
