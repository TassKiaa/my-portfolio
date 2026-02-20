"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-accent">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </motion.div>

        {/* Main Content Card - Glassmorphism style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl border border-primary/20 bg-surface/30 backdrop-blur-xl shadow-2xl"
        >
          {/* Decorative Corner Light */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Contact Info Column */}
            <div className="space-y-4 md:border-r md:border-primary/10 md:pr-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Professional Lead</p>
                <p className="text-lg font-semibold text-accent">Taskia Khanam</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Location</p>
                <p className="text-accent/80">Sylhet, Bangladesh</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Email & Contact</p>
                <a href="mailto:taskiakhanam2@gmail.com" className="block text-sm text-accent/80 hover:text-primary transition-colors break-all">
                  taskiakhanam2@gmail.com
                </a>
                <p className="text-sm text-accent/80 mt-1">01630668034</p>
              </div>
            </div>

            {/* Biography Column */}
            <div className="md:col-span-2 space-y-6">
              <p className="leading-relaxed text-accent/90 text-lg italic border-l-4 border-primary/40 pl-4">
                {"I am a Computer Science & Engineering student and an aspiring Software Engineer dedicated to architecting impactful digital ecosystems."}
              </p>
              
              <div className="space-y-4 text-accent/70 leading-relaxed text-sm md:text-base">
                <p>
                  With a specialized focus on the intersection of <span className="text-primary font-semibold text-glow">healthcare technology</span> and <span className="text-primary font-semibold text-glow">full-stack development</span>, I leverage modern Machine Learning frameworks to transform complex data into actionable medical insights.
                </p>
                <p>
                  I thrive in high-innovation environments, building clean, scalable, and user-centric systems. From predictive modeling for anemia detection to engineering seamless medical equipment platforms, I am committed to solving real-world challenges through elegant, efficient code.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}