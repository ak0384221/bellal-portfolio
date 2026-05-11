export default function Projects({ project }) {
  return (
    <article
      className="
        mb-6 p-5 rounded-xl
        border border-neutral-700/50
        bg-gradient-to-br from-neutral-900/40 to-neutral-950/40
        hover:bg-neutral-900/60
        hover:border-emerald-500/40
        transition-all duration-300
        backdrop-blur-sm
      "
    >
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-bold text-white flex-1">{project.name}</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium flex-shrink-0">
          {project.status}
        </span>
      </div>

      <p className="text-sm text-slate-400 mb-3">
        {project.type} • {project.date}
      </p>

      <ul className="list-disc list-inside space-y-1.5 mb-4">
        {project.summary.map((point, index) => (
          <li key={index} className="text-sm text-slate-300 leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      <p className="text-sm text-slate-400 mb-4">
        <span className="text-slate-300">Tech Stack:</span>{" "}
        {project.tech.join(", ")}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.link.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-1.5 text-xs rounded-md
              border border-neutral-600
              text-slate-200
              bg-neutral-800/40
              hover:bg-emerald-500/10
              hover:border-emerald-400
              hover:text-emerald-300
              transition-all duration-200
              font-medium
            "
          >
            {item.name} →
          </a>
        ))}
      </div>
    </article>
  );
}
