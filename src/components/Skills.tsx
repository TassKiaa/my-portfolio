"use client";
import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const skills = {
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MySQL"],
    Tools: ["GitHub", "Figma", "LaTeX"],
  };

  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-row gap-6 items-start">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-3 w-44"
            onMouseEnter={() => setActive(category)}
            onMouseLeave={() => setActive(null)}
          >
            <button
              className={`w-full px-6 py-3 rounded-xl border border-forest transition-all font-medium ${
                active === category
                  ? "bg-forest text-bone"
                  : "text-forest bg-bone/30"
              }`}
            >
              {category}
            </button>

            <div className="flex flex-col gap-2 min-h-[150px]">
              {active === category &&
                items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 bg-bone border border-forest/10 text-forest rounded-lg text-sm font-medium text-center animate-in fade-in slide-in-from-top-2"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}