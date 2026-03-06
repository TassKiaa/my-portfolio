"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 overflow-hidden">
      
      {/* Branding Logo */}
      <div className="absolute top-6 left-6 lg:top-10 lg:left-20 z-30">
        <span className="text-lg lg:text-xl font-black tracking-tighter text-accent">
          T.<span className="text-primary">KHANAM</span>
        </span>
      </div>

      {/* Increased gap from 12 to 16/20 for that 2cm feel */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full max-w-7xl pt-12 lg:pt-0">
        
        {/* 1. Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-4 lg:space-y-6 order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-accent leading-tight">
            Hi, I am <br />
            <span className="text-primary">Taskia Khanam</span>
          </h1>
          <p className="text-sm sm:text-lg text-accent/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Full-stack developer focused on building clean, scalable, and impactful 
            digital solutions with a passion for Machine Learning.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 pt-2">
            <a href="#projects" className="px-5 py-2.5 lg:px-6 lg:py-3 bg-surface text-primary text-sm lg:text-base font-bold rounded-xl shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
              My Work
            </a>
            <a href="#skills" className="px-5 py-2.5 lg:px-6 lg:py-3 bg-surface text-primary text-sm lg:text-base font-bold rounded-xl shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
              Skills
            </a>
            <a href="#experience" className="px-5 py-2.5 lg:px-6 lg:py-3 bg-surface text-primary text-sm lg:text-base font-bold rounded-xl shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
              Experience
            </a>
          </div>
        </motion.div>

        {/* 2. Right Side: Slightly smaller circular photo for better spacing */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full order-1 lg:order-2"
        >
          {/* Small decrease in size (420px -> 380px) to allow for more white space */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[380px] lg:h-[380px] aspect-square flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] lg:border-[8px] border-surface shadow-2xl relative">
              <Image 
                src="/images/taskia.jpeg" 
                alt="Taskia Khanam"
                fill
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}