"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anemia Prediction App",
    description:
      "Implemented and evaluated multiple machine learning models in Google Colab to predict anemia for early detection and performance optimization.",
    link: "https://github.com/TassKiaa/Anemia-prediction-app",
    // Direct link from your Pinterest source
    image: "/images/anemia.jpg",
  },
  {
    title: "MedBridge Platform",
    description:
      "Full-stack medical equipment rental & donation platform built with Node.js, MySQL, and responsive frontend for accessible healthcare services.",
    link: "https://github.com/TassKiaa/Medbridge-",
    // Direct link from your Pinterest source
   image: "/images/medbridge.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-forest">
          Featured <span className="opacity-70">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group overflow-hidden rounded-3xl h-[350px] border border-forest/10 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              {/* Dark Forest Overlay - makes text readable */}
              <div className="absolute inset-0 bg-forest/70 group-hover:bg-forest/60 transition-all duration-300"></div>

              {/* Content Box */}
              <div className="relative h-full p-8 flex flex-col justify-end text-bone">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-bone/80 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit px-6 py-2 bg-bone text-forest rounded-full text-sm font-bold hover:bg-white transition-colors"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}