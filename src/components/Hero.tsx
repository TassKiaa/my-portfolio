"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* 1. Top Corner Logo - Branding your portfolio */}
      <div className="absolute top-10 left-0">
        <span className="text-xl font-black tracking-tighter text-accent">
          T.<span className="text-primary text-glow">KHANAM</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side: Your Introduction */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-accent leading-tight">
            Hi, I am <br />
            <span className="text-primary text-glow">Taskia Khanam</span>
          </h1>
          <p className="text-lg text-accent/60 max-w-lg leading-relaxed">
            Full-stack developer focused on building clean, scalable, and impactful 
            digital solutions with a passion for Machine Learning.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-background font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              My Work
            </a>
            <a
              href="#skills"
              className="px-8 py-3 border border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors"
            >
              Experience
            </a>
          </div>
        </motion.div>

        {/* 2. Right Side: Floating Tech Card (Fills the gap) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Animated Glow behind the card */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
          
          <div className="relative p-8 rounded-3xl border border-primary/20 bg-surface/30 backdrop-blur-xl shadow-2xl animate-float">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { label: "Frontend", val: "React/Next" },
                { label: "Backend", val: "Node/SQL" },
                { label: "AI/ML", val: "Python" },
                { label: "Design", val: "Tailwind" }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-background/40 rounded-2xl border border-primary/10">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-accent">{item.val}</p>
                </div>
              ))}
            </div>
            
            {/* Minimal Code Decoration */}
            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-xs font-mono text-primary/60">
                const dev = &#123; <br />
                &nbsp;&nbsp;problemSolver: true,<br />
                &nbsp;&nbsp;creative: true<br />
                &#125;;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}