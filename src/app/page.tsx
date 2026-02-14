import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience"; 
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="bg-taupe text-forest min-h-screen px-6 md:px-16 py-20 space-y-32">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
       <Footer />
    </main>
  );
}