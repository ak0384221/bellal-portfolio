import { inter, ubuntuMono } from "@/app/layout";

export default function Projects({ project }) {
  return (
    <div
      key={project.name}
      className="mb-6 p-4 border border-neutral-800 rounded-lg "
    >
      <h3 className="text-xl font-bold dark:text-white">
        {project.name}{" "}
        <span className="text-sm capitalize font-ubuntu text-green-500">
          {project.status}
        </span>
      </h3>
      <p className="text-sm dark:text-neutral-400">
        {project.type} • {project.date}
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1">
        {project.summary.map((point, index) => (
          <li
            className={`dark:text-neutral-200 ${inter.className} dark:font-extralight text-sm`}
            key={index}
          >
            {point}
          </li>
        ))}
      </ul>

      <p
        className={`mt-2 dark:text-neutral-300  text-sm ${ubuntuMono.className}`}
      >
        Tech Stack: {project.tech.join(", ")}
      </p>

      <div className="mt-2 flex space-x-4">
        {project.link.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black hover:bg-black hover:text-white dark:text-white  dark:border-neutral-500 dark:hover:bg-white dark:hover:text-black px-2 py-1 rounded-sm transition-colors capitalize"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
