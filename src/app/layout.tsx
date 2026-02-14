import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

export const metadata = {
  title: "Taskia Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-[#4C3D19] overflow-x-hidden">

        {/* Particles Background */}
        <ParticlesBackground />

        <main className="relative max-w-5xl mx-auto px-6 md:px-10 py-16">
          {children}
        </main>

      </body>
    </html>
  );
}