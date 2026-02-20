"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    { 
      degree: "B.SC : Computer Science and Engineering", 
      institution: "Metropolitan University Sylhet, BD", 
      date: "Expected December 2026",
      
    },
    { 
      degree: "HSC : Murari Chand College", 
      institution: "Sylhet, Bangladesh", 
      date: "2019-2020",
      
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-accent">
            Academic <span className="text-primary text-glow">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-12">
          {educationData.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

              {/* Education Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-primary/10 bg-surface/30 backdrop-blur-xl hover:border-primary/40 transition-all group shadow-xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary/80 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-mono text-accent/50 bg-background/50 px-3 py-1 rounded-full w-fit">
                    {edu.date}
                  </span>
                </div>
                
                <p className="text-accent/60 leading-relaxed text-sm italic">
                  
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}