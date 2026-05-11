export default function SkillPill({ text, accentColor = "cyan" }) {
  const colorMap = {
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
    violet: "border-violet-500/20 bg-violet-500/10 text-violet-300",
    yellow: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    pink: "border-pink-500/20 bg-pink-500/10 text-pink-300",
  };

  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm font-medium ${colorMap[accentColor]}`}
    >
      {text}
    </div>
  );
}
