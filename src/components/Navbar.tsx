"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-background/60 backdrop-blur-xl border-b border-primary/10 z-[100]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Branding - Matches Hero Logo */}
        <a href="#" className="group">
          <span className="text-xl font-black tracking-tighter text-accent transition-colors">
            T.<span className="text-primary text-glow group-hover:text-white transition-colors">KHANAM</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-xs uppercase tracking-widest font-bold text-accent/70 hover:text-primary transition-colors group"
            >
              {link.name}
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#06b6d4]"></span>
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}