import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "../components/ParticlesBackground";

export const metadata = {
  title: "Taskia Khanam | Full-Stack Developer",
  description: "Portfolio of Taskia Khanam - Focused on Web Development and Machine Learning.",
  // These tags are specifically for LinkedIn/Social Media sharing
  openGraph: {
    title: "Taskia Khanam | Portfolio",
    description: "Full-stack developer focused on building clean, scalable, and impactful digital solutions.",
    url: "https://taskia-portfolio-h3gx.vercel.app", 
    siteName: "Taskia Khanam Portfolio",
    images: [
      {
        url: "/images/taskia.jpeg", // LinkedIn will use your photo as the preview
        width: 1200,
        height: 630,
        alt: "Taskia Khanam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-background text-accent overflow-x-hidden antialiased">
        
        {/* Particle Background Layer */}
        <div className="fixed inset-0 -z-10">
           <ParticlesBackground />
        </div>

        
        <main className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
          {children}
        </main>

      </body>
    </html>
  );
}