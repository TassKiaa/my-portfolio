export default function Hero() {
  return (
    <section className="flex flex-col gap-6 py-24">

      <h1 className="text-5xl font-bold text-forest">
        Hi, I am Taskia Khanam
      </h1>

      <p className="text-xl max-w-2xl text-forest/90">
        Full-stack developer focused on building clean, scalable, and impactful digital solutions.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">

        <a
          href="#skills"  
          className="px-8 py-3 border border-forest text-forest rounded-full font-medium 
          transition-all duration-200 ease-in-out
          hover:bg-bone hover:shadow-md 
          active:scale-95 active:bg-forest active:text-bone"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="px-8 py-3 border border-forest text-forest rounded-full font-medium 
          transition-all duration-200 ease-in-out
          hover:bg-bone hover:shadow-md 
          active:scale-95 active:bg-forest active:text-bone"
        >
          My Work
        </a>

        <a
          href="#experience"
          className="px-8 py-3 border border-forest text-forest rounded-full font-medium 
          transition-all duration-200 ease-in-out
          hover:bg-bone hover:shadow-md 
          active:scale-95 active:bg-forest active:text-bone"
        >
          Experience
        </a>

      </div>
    </section>
  );
}