import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Code, GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade in animation
      gsap.fromTo(footerRef.current?.children,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );

      // Floating particles animation
      gsap.to(".footer-particle", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: GithubLogo, url: "https://github.com/CountessOreo", label: "GitHub"},
    { icon: LinkedinLogo, url: "https://www.linkedin.com/in/hayley-treutens-2051aa24a/", label: "LinkedIn" },
    { icon: EnvelopeSimple, url: "mailto:hayleytreutens@gmail.com", label: "Email" }
  ];

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative pt-0 pb-0 overflow-hidden border-t border-border/20">
    {/* Purple Glowing Line */}
    <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 shadow-[0_0_20px_rgba(192,132,252,0.8)]" />

      <div ref={footerRef} className="max-w-7xl mx-auto px-6 pt-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hayley
              </span>
            </h3>
            <p className="text-muted-foreground">
              Exploring the world of technology through code and creativity. <br></br> <br></br>
              Not just learning to code - coding to learn, evolve, and lead
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 hover:text-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon weight="light" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Pretoria, SA</p>
              <p>✉️ hayleytreutens@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart weight="fill" size={16} className="text-red-500" />
              <span>and</span>
              <Code weight="light" size={16} className="text-primary" />
              <span>by Hayley Treutens</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Hayley Treutens. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;