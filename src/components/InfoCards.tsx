export default function InfoCards() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* EDUCATION */}
        <div className="bg-emerald-400 rounded-xl p-6 text-slate-900">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <p className="mb-2">
            <strong>2019 – Present</strong><br />
            BSc in CSE – Metropolitan University
          </p>
        </div>

        {/* SKILLS */}
        <div className="bg-emerald-400 rounded-xl p-6 text-slate-900">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Tailwind",
              "UI/UX",
              "JavaScript",
            ].map(skill => (
              <span
                key={skill}
                className="bg-white/80 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}