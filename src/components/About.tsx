export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About Me
        </h2>

        {/* Name & Contact */}
        <div className="mb-8 text-forest/80">
          <p className="text-xl font-semibold">Taskia Khanam</p>
          <p>Sylhet, Bangladesh</p>
          <p className="text-sm">
            taskiakhanam2@gmail.com | 01630668034
          </p>
        </div>

        <div className="bg-bone p-10 rounded-3xl shadow-md text-left">
          <p className="leading-relaxed text-forest/90 mb-6">
            I am a Computer Science and Engineering student passionate about
            building meaningful digital solutions. My interests lie in
            healthcare technology, full-stack development, and machine learning.
          </p>

          <p className="leading-relaxed text-forest/90">
            I enjoy solving real-world problems through clean, scalable
            systems and continuously learning in innovative environments
            where technology creates impact.
          </p>
        </div>

      </div>
    </section>
  );
}