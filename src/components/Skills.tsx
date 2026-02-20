"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  const skillData = {
    Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    Backend: ["Node.js", "Express", "MySQL", "PostgreSQL"],
    "AI & Data": ["Python", "Machine Learning", "Kaggle", "Research", "Data Analysis"],
    Tools: ["GitHub", "Figma", "LaTeX", "Vercel", "Google Colab"],
  };

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Elegant Header */}
        <h2 className="text-3xl font-bold mb-12 text-accent text-center">
          Technical <span className="text-primary text-glow">Expertise</span>
        </h2>

        {/* The 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {Object.entries(skillData).map(([category, items]) => (
            <div
              key={category}
              className="flex flex-col gap-3"
              onMouseEnter={() => setActive(category)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Category Header */}
              <button
                className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 font-bold tracking-widest text-xs uppercase flex justify-between items-center ${
                  active === category
                    ? "bg-primary text-background border-primary shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "text-accent border-primary/20 bg-surface/30 backdrop-blur-md"
                }`}
              >
                {category}
                <span className={`text-[10px] transition-transform duration-300 ${active === category ? "rotate-180" : "opacity-40"}`}>
                  ▼
                </span>
              </button>

              {/* Vertical Skill List (Y-Axis) */}
              <div className="relative">
                <AnimatePresence>
                  {active === category && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-2 overflow-hidden"
                    >
                      {items.map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-5 py-3 bg-primary/5 border border-primary/10 text-accent/80 rounded-lg text-xs font-medium text-left hover:bg-primary/10 transition-colors"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}