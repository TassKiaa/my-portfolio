"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Anemia Prediction App",
    description: "ML models in Google Colab to predict anemia for early detection.",
    link: "https://github.com/TassKiaa/Anemia-prediction-app",
    image: "/images/anemia.jpg",
    tags: ["Python", "ML"],
  },
  {
    title: "MedBridge Platform",
    description: "Full-stack medical rental platform built with Node.js and MySQL.",
    link: "https://github.com/TassKiaa/Medbridge-",
    image: "/images/medbridge.jpg",
    tags: ["Node.js", "SQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-surface/30 backdrop-blur-md flex flex-col hover:border-primary/40 transition-all group"
            >
              {/* Small Image Header */}
              <div className="h-32 w-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content Area */}
              <div className="p-5">
                <div className="flex gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase font-bold text-primary/70 tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-md font-bold text-accent mb-1">{project.title}</h3>
                <p className="text-[11px] text-accent/60 leading-tight mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-primary/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold text-primary hover:text-white transition-colors"
                  >
                    <Github size={12} /> GITHUB
                  </a>
                  <a href={project.link} target="_blank" className="text-accent/30 hover:text-primary">
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}