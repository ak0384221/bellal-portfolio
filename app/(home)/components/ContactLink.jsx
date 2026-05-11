export default function ContactLink({ contact }) {
  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="w-6 h-6 flex-shrink-0">
        <img
          src={contact.img}
          alt={contact.platform}
          className="w-full h-full object-contain"
        />
      </div>

      <span className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors font-light truncate">
        {contact.platform}
      </span>
    </a>
  );
}
