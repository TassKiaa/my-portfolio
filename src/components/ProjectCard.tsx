type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({ title, description, tech, github }: Props) {
  return (
    <div className="border rounded-xl p-6 transition hover:shadow-lg hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="text-sm bg-gray-100 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        className="text-blue-600 font-medium hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}