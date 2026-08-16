export default function HeroCard({ label, title, description }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#070606] p-5 shadow-[0_0_0_1px_rgba(239,68,68,0.05)] transition-colors duration-300 hover:border-red-500/20 hover:bg-[#1d1212]">
      <p className="text-xs uppercase tracking-widest text-green-500 font-semibold">
        {label}
      </p>

      <h3 className="mt-3 text-lg font-bold text-[#f8f1ed]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
