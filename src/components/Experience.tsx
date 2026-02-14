export default function Experience() {
  const experiences = [
    {
      title: "Tech Intern",
      company: "C for Creative School, BD",
      duration: "Dec 2024 – Mar 2025",
      points: [
        "Worked on practical technical projects to strengthen development skills.",
        "Used modern tools to support team tasks and deliver solutions.",
        "Contributed to ongoing projects and organizational goals."
      ]
    },
    {
      title: "Medical Biller",
      company: "IntelliGency Solutions Inc, BD",
      duration: "Nov 2024 – Jan 2025",
      points: [
        "Processed medical claims and validated billing data for accuracy.",
        "Resolved billing issues to ensure timely claim approvals."
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-8">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="p-6 rounded-2xl bg-bone border border-forest/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="font-medium opacity-80">{exp.company}</p>
              </div>
              <span className="text-sm italic opacity-60">{exp.duration}</span>
            </div>
            <ul className="list-disc list-inside space-y-2 opacity-90 text-sm">
              {exp.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}