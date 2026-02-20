"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  // Your verified Formspree endpoint
  const formspreeEndpoint = "https://formspree.io/f/mkovveey";

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Container */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-accent/50 mt-2 text-sm italic">
            Let&apos;s build something together.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Socials */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent">Connect with me</h3>
            <div className="flex gap-3">
              {[
                { icon: <Github size={20} />, href: "https://github.com/TassKiaa", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: " https://www.linkedin.com/in/taskiakhanam", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:taskiakhanam2@gmail.com", label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-surface/30 border border-primary/20 text-primary hover:bg-primary hover:text-background transition-all shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="p-5 rounded-2xl border border-primary/10 bg-primary/5 max-w-xs">
              <p className="text-xs text-accent/60 leading-relaxed">
                Currently available for <span className="text-primary font-medium text-glow">Full-stack</span> roles or <span className="text-primary font-medium">ML research</span> opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Slim Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 md:p-6 rounded-2xl border border-primary/20 bg-surface/30 backdrop-blur-xl shadow-2xl max-w-[320px] mx-auto md:mx-0"
          >
            <form action={formspreeEndpoint} method="POST" className="space-y-3">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-primary font-bold mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-background/50 border border-primary/10 rounded-lg px-3 py-2 text-xs text-accent focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-primary font-bold mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="email@example.com"
                  className="w-full bg-background/50 border border-primary/10 rounded-lg px-3 py-2 text-xs text-accent focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-primary font-bold mb-1">Message</label>
                <textarea 
                  name="message"
                  rows={2} 
                  placeholder="Message..."
                  className="w-full bg-background/50 border border-primary/10 rounded-lg px-3 py-2 text-xs text-accent focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-2.5 bg-primary text-background text-xs font-bold rounded-lg flex justify-center items-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}