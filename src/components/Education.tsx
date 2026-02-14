export default function Education() {
  const educationData = [
    { degree: "B.SC : Computer Science and Engineering", institution: "Metropolitan University Sylhet, BD", date: "December 2026" },
    { degree: "HSC : Murari Chand College", institution: "Sylhet, Bangladesh", date: "2019-2020" },
  ];

  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="bg-bone p-8 rounded-2xl border border-forest/10 space-y-6 shadow-sm">
        {educationData.map((edu, i) => (
          <div key={i} className={i !== 0 ? "pt-6 border-t border-forest/10" : ""}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">{edu.degree}</p>
                <p className="opacity-80">{edu.institution}</p>
              </div>
              <span className="text-sm italic opacity-60">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}