export default function HeroCard({ label, title, description }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300">
      <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
        {label}
      </p>

      <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
