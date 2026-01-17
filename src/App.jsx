import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Hero Animation (Fade in + Slide up)
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Projects Animation (ScrollTrigger)
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%", // Start animation when top of section hits 80% of viewport
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-sm bg-background/80">
        <h1 className="text-xl font-bold tracking-tighter">Aftab.</h1>
        <div className="flex gap-4 text-sm font-medium text-muted">
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
        <p className="hero-text text-accent mb-4 font-mono">Hi, I'm Aftab</p>
        <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight mb-6">
          Full Stack Developer. <br />
          <span className="text-muted">Building digital excellence.</span>
        </h1>
        <p className="hero-text text-muted max-w-xl text-lg mb-8 leading-relaxed">
          I bridge the gap between complex backend logic and intuitive frontend design. 
          Currently studying ECE at Saveetha Engineering College.
        </p>
        
        <div className="hero-text flex gap-6 items-center">
          <a href="https://github.com/git-aftab" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <FaGithub size={24} /> <span className="hidden md:inline">git-aftab</span>
          </a>
          <a href="https://linkedin.com/in/md-aftab-360996328" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <FaLinkedin size={24} /> <span className="hidden md:inline">LinkedIn</span>
          </a>
          <div className="flex items-center gap-2 text-muted">
            <FaMapMarkerAlt /> Chennai, India
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 border-b border-surface pb-4 inline-block">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Project 1 */}
          <div className="project-card group">
            <div className="bg-surface p-8 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 border border-zinc-800">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Groovo Music Player</h3>
                <span className="text-accent text-xs font-mono border border-accent/20 px-2 py-1 rounded">JS / Cloudflare</span>
              </div>
              <p className="text-muted mb-6">
                A seamless, feature-rich web music player. Features context-aware playback, custom playlist persistence, and dual-mode search.
              </p>
              <ul className="text-sm text-gray-400 mb-6 list-disc list-inside space-y-1">
                <li>Real-time Audio Visualization</li>
                <li>Persistent LocalStorage Playlists</li>
                <li>Smart Context Navigation</li>
              </ul>
              <div className="flex gap-4 font-mono text-sm">
                <a href="#" className="underline decoration-accent underline-offset-4 hover:text-accent">Live Demo</a>
                <a href="#" className="underline decoration-accent underline-offset-4 hover:text-accent">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card group">
            <div className="bg-surface p-8 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 border border-zinc-800">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Expense Tracker</h3>
                <span className="text-accent text-xs font-mono border border-accent/20 px-2 py-1 rounded">MERN / TypeScript</span>
              </div>
              <p className="text-muted mb-6">
                Production-ready financial management tool. Includes secure JWT auth, Razorpay integration, and data visualization.
              </p>
              <ul className="text-sm text-gray-400 mb-6 list-disc list-inside space-y-1">
                <li>JWT Authentication & Bcrypt</li>
                <li>Razorpay Payment Gateway</li>
                <li>MongoDB Aggregations</li>
              </ul>
              <div className="flex gap-4 font-mono text-sm">
                <a href="#" className="underline decoration-accent underline-offset-4 hover:text-accent">Live Demo</a>
                <a href="#" className="underline decoration-accent underline-offset-4 hover:text-accent">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to work together?
        </h2>
        <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
          I'm currently looking for internships and new opportunities. 
          Whether you have a question about my stack or just want to say hi, 
          my inbox is always open.
        </p>
        
        <a 
          href="mailto:your.email@gmail.com" // REPLACE THIS WITH YOUR REAL EMAIL
          className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full 
                     hover:bg-accent hover:text-white transition-all duration-300 
                     transform hover:scale-105 shadow-lg shadow-accent/20"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-muted text-sm border-t border-surface mt-20">
        <p>&copy; 2024 Aftab. Built with React, Tailwind & GSAP.</p>
      </footer>
    </div>
  );
};

export default App;