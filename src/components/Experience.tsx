"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Tech Intern",
    company: "C for Creative School",
    location: "Sylhet, BD",
    duration: "Dec 2024 – March 2025",
    description: [
      "Enhanced technical proficiency by delivering practical, project-based digital solutions.",
      "Mastered industry-standard tools and techniques to optimize organizational workflows.",
      "Contributed to core development objectives while building a scalable foundation for software engineering."
    ],
  },
  {
    title: "Medical Biller",
    company: "IntelliGency Solutions Inc",
    location: "Sylhet, BD",
    duration: "Nov 2024 – Jan 2025",
    description: [
      "Streamlined medical billing workflows and data validation, significantly improving claim acceptance rates.",
      "Acted as a technical bridge between clients and providers to resolve discrepancies and ensure timely payments.",
      "Maintained high standards of data accuracy and client satisfaction in a fast-paced medical tech environment."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-accent">
            Professional <span className="text-primary text-glow">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4 opacity-50"></div>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8 rounded-3xl border border-primary/10 bg-surface/20 backdrop-blur-md hover:border-primary/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Briefcase size={18} /> {exp.title}
                  </h3>
                  <p className="text-accent font-medium mt-1">{exp.company}</p>
                </div>
                
                <div className="flex flex-col md:items-end text-xs text-accent/50 space-y-1 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {exp.duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-accent/70 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}