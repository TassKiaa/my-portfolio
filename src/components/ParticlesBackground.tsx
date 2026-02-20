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
    /* Removed the light gradient classes so your dark global CSS is visible */
    <div className="fixed inset-0 -z-10">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { 
              value: 100, // Increased for a star-field effect
              density: { enable: true, area: 800 } 
            },
            color: { 
              value: ["#06b6d4", "#ffffff", "#7dd3fc"] // Cyan and White stars
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.7 }, // Different brightness levels
              animation: {
                enable: true,
                speed: 1,      // Twinkle speed
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 3 }, // Much smaller, like real stars
              random: true,
            },
            move: {
              enable: true,
              speed: 0.4, // Slow, peaceful drift
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            // Added glowing lines (optional, common in tech portfolios)
            links: {
              enable: true,
              distance: 150,
              color: "#06b6d4",
              opacity: 0.1,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Connects stars to your mouse
              },
              onClick: {
                enable: true,
                mode: "push", // Adds more stars when you click
              },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.4 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}