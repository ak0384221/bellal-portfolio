import { inter } from "@/app/layout";

export default function Projects({ project }) {
  return (
    <div
      key={project.name}
      className="mb-6 p-4 border border-neutral-800 rounded-lg text-neutral-200"
    >
      <h3 className="text-xl font-bold text-green-400">{project.name}</h3>
      <p className="text-sm text-neutral-400">
        {project.type} • {project.date}
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1">
        {project.summary.map((point, index) => (
          <li
            className={`text-neutral-200 ${inter.className} font-extralight`}
            key={index}
          >
            {point}
          </li>
        ))}
      </ul>

      <p className="mt-2 text-neutral-200">
        Tech Stack: {project.tech.join(", ")}
      </p>

      <div className="mt-2 flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
