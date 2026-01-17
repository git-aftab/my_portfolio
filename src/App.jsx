import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaTerminal, FaCode, FaRocket } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const cursorRef = useRef(null);
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> aftab@portfolio:~$ ./init_portfolio.sh';

  useEffect(() => {
    // Typewriter effect for terminal
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    // Custom cursor trail effect
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Glitch effect on title
      gsap.to(".glitch", {
        textShadow: "2px 2px #00ff41, -2px -2px #0088ff",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3
      });

      // Projects animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Terminal blink cursor
      gsap.to(".blink", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => {
      ctx.revert();
      clearInterval(typeInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-background min-h-screen text-[#00ff41] selection:bg-[#00ff41] selection:text-black overflow-x-hidden font-mono">
      
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-5 h-5 border-2 border-[#00ff41] rounded-full pointer-events-none z-[100] hidden md:block opacity-50"
        style={{ mixBlendMode: 'difference' }}
      />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-5">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#00ff41] to-transparent animate-scan" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/60 border-b border-[#00ff41]/20">
        <div className="flex items-center gap-2">
          <FaTerminal className="text-[#00ff41]" />
          <h1 className="text-xl font-bold tracking-tighter text-white">
            <span className="text-[#00ff41]">root@</span>aftab
          </h1>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#projects" className="hover:text-[#00ff41] transition-all duration-300 hover:scale-110 relative group">
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff41] group-hover:w-full transition-all duration-300" />
            [work]
          </a>
          <a href="#about" className="hover:text-[#00ff41] transition-all duration-300 hover:scale-110 relative group">
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff41] group-hover:w-full transition-all duration-300" />
            [about]
          </a>
          <a href="#contact" className="hover:text-[#00ff41] transition-all duration-300 hover:scale-110 relative group">
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff41] group-hover:w-full transition-all duration-300" />
            [contact]
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
        {/* Terminal Window */}
        <div className="hero-text mb-8 bg-black/80 border border-[#00ff41]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#00ff41]/10">
          <div className="bg-[#00ff41]/10 px-4 py-2 flex gap-2 border-b border-[#00ff41]/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-auto text-xs text-gray-500">bash - aftab@portfolio</span>
          </div>
          <div className="p-6">
            <p className="text-[#00ff41] mb-2">{terminalText}<span className="blink">_</span></p>
            <p className="text-[#0088ff] text-sm">Initializing portfolio...</p>
            <p className="text-gray-500 text-sm">Loading modules: [React, Node.js, MongoDB, GSAP]</p>
            <p className="text-[#00ff41] text-sm mt-2">✓ System ready</p>
          </div>
        </div>

        <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight mb-6 text-white glitch">
          Full Stack Developer<span className="text-[#00ff41]">.</span>
          <br />
          <span className="text-[#0088ff]">Building digital excellence_</span>
        </h1>
        
        <p className="hero-text text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
          <span className="text-[#00ff41]">$</span> cat about.txt
          <br />
          <span className="ml-4">I bridge the gap between complex backend logic and intuitive frontend design.</span>
          <br />
          <span className="ml-4">Currently studying ECE at Saveetha Engineering College.</span>
        </p>
        
        <div className="hero-text flex flex-wrap gap-6 items-center">
          <a 
            href="https://github.com/git-aftab" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#00ff41] transition-all duration-300 hover:scale-110 group"
          >
            <FaGithub size={24} className="group-hover:rotate-12 transition-transform" /> 
            <span className="hidden md:inline border-b border-transparent group-hover:border-[#00ff41]">git-aftab</span>
          </a>
          <a 
            href="https://linkedin.com/in/md-aftab-360996328" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#0088ff] transition-all duration-300 hover:scale-110 group"
          >
            <FaLinkedin size={24} className="group-hover:rotate-12 transition-transform" /> 
            <span className="hidden md:inline border-b border-transparent group-hover:border-[#0088ff]">LinkedIn</span>
          </a>
          <div className="flex items-center gap-2 text-gray-500">
            <FaMapMarkerAlt className="text-[#00ff41]" /> Chennai, India
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="hero-text mt-12 flex flex-wrap gap-3">
          {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'GSAP', 'Tailwind'].map((tech, i) => (
            <span 
              key={tech}
              className="px-3 py-1 border border-[#00ff41]/30 rounded text-xs text-[#00ff41] hover:bg-[#00ff41]/10 hover:scale-110 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-white flex items-center gap-3">
          <FaCode className="text-[#00ff41]" />
          <span className="border-b-2 border-[#00ff41] pb-2">~/projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="project-card group">
            <div className="bg-black/60 p-8 rounded-lg border-2 border-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ff41]/20 hover:scale-[1.02] relative overflow-hidden">
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#00ff41]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff41] transition-colors">
                    Groovo Music Player
                  </h3>
                  <span className="text-[#00ff41] text-xs border border-[#00ff41]/40 px-2 py-1 rounded bg-[#00ff41]/5">
                    JS / Cloudflare
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A seamless, feature-rich web music player. Features context-aware playback, custom playlist persistence, and dual-mode search.
                </p>
                
                <div className="mb-6 space-y-2">
                  {['Real-time Audio Visualization', 'Persistent LocalStorage Playlists', 'Smart Context Navigation'].map(feature => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-[#00ff41] mt-1">▹</span>
                      <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  <a 
                    href="#" 
                    className="text-[#00ff41] hover:text-[#0088ff] transition-colors underline underline-offset-4 decoration-[#00ff41]/30 hover:decoration-[#0088ff]"
                  >
                    [live_demo]
                  </a>
                  <a 
                    href="#" 
                    className="text-[#00ff41] hover:text-[#0088ff] transition-colors underline underline-offset-4 decoration-[#00ff41]/30 hover:decoration-[#0088ff]"
                  >
                    [github]
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card group">
            <div className="bg-black/60 p-8 rounded-lg border-2 border-[#0088ff]/20 hover:border-[#0088ff] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0088ff]/20 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#0088ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#0088ff] transition-colors">
                    Expense Tracker
                  </h3>
                  <span className="text-[#0088ff] text-xs border border-[#0088ff]/40 px-2 py-1 rounded bg-[#0088ff]/5">
                    MERN / TypeScript
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Production-ready financial management tool. Includes secure JWT auth, Razorpay integration, and data visualization.
                </p>
                
                <div className="mb-6 space-y-2">
                  {['JWT Authentication & Bcrypt', 'Razorpay Payment Gateway', 'MongoDB Aggregations'].map(feature => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-[#0088ff] mt-1">▹</span>
                      <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  <a 
                    href="#" 
                    className="text-[#0088ff] hover:text-[#00ff41] transition-colors underline underline-offset-4 decoration-[#0088ff]/30 hover:decoration-[#00ff41]"
                  >
                    [live_demo]
                  </a>
                  <a 
                    href="#" 
                    className="text-[#0088ff] hover:text-[#00ff41] transition-colors underline underline-offset-4 decoration-[#0088ff]/30 hover:decoration-[#00ff41]"
                  >
                    [github]
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <FaRocket className="text-5xl text-[#00ff41] mx-auto mb-6 animate-bounce" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          <span className="text-[#00ff41]">$</span> Ready to collaborate<span className="text-[#0088ff]">?</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm currently looking for internships and new opportunities. 
          Whether you have a question about my stack or just want to say hi, 
          my inbox is always open.
        </p>
        
        <a 
          href="mailto:your.email@gmail.com"
          className="inline-block px-8 py-4 bg-[#00ff41] text-black font-bold rounded 
                     hover:bg-[#0088ff] hover:shadow-2xl hover:shadow-[#0088ff]/50
                     transition-all duration-300 transform hover:scale-110 
                     border-2 border-[#00ff41] hover:border-[#0088ff]"
        >
          [send_message]
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm border-t border-[#00ff41]/10">
        <p className="mb-2">
          <span className="text-[#00ff41]">$</span> echo "© 2024 Aftab. Built with React, Tailwind & GSAP."
        </p>
        <p className="text-xs text-gray-700">System uptime: 99.9% | Status: <span className="text-[#00ff41]">Online</span></p>
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;