"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#fdf6e3] to-[#ffe4e1]">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } }, // transparent, CSS handles gradient
          particles: {
            number: { value: 25 }, // fewer for airy effect
            color: { value: ["#ffd1dc", "#b0e0e6", "#ffe4b5"] }, // pastel colors
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: {
              value: { min: 10, max: 40 }, // larger "bubble" sizes
              random: true, // vary size
            },
            move: {
              enable: true,
              speed: 0.1, // very slow drift
              direction: "top", // float upwards
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
            modes: { bubble: { distance: 80, size: 50, duration: 2 } },
          },
        }}
      />
    </div>
  );
}