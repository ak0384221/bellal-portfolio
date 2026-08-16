import { ubuntu, ubuntuMono } from "@/app/layout";

export default function Projects({ project }) {
  return (
    <article
      className="
        mb-6 p-5 rounded-xl
        border border-red-500/10
        bg-[#130f0d]
        hover:bg-[#1b1412]
        hover:border-red-500/20
        transition-all duration-300
        backdrop-blur-sm
      "
    >
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-red-500/10 blur-2xl pointer-events-none" />
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className={`${ubuntu.className} text-lg font-bold text-[#f8f1ed] flex-1 tracking-[-0.03em]`}
        >
          {project.name}
        </h3>
        <span className="text-[10px] px-3 py-1 rounded-full bg-red-500/10 text-red-300 border border-red-500/20 font-medium flex-shrink-0 uppercase tracking-[0.08em]">
          {project.status}
        </span>
      </div>

      <p
        className={`${ubuntuMono.className} text-xs uppercase tracking-[0.08em] text-slate-400 mb-3`}
      >
        {project.type} • {project.date}
      </p>

      <ul
        className={`list-disc list-inside space-y-1.5 mb-4 ${ubuntuMono.className}`}
      >
        {project.summary.map((point, index) => (
          <li key={index} className="text-sm text-slate-300 leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      <p className={`${ubuntuMono.className} text-sm text-slate-400 mb-4`}>
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
              hover:bg-red-500/10
              hover:border-red-400
              hover:text-red-200
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
