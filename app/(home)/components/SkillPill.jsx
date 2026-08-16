export default function SkillPill({ text, accentColor = "red" }) {
  const colorMap = {
    red: "border-red-500/20 bg-red-500/10 text-red-300",
    orange: "border-orange-500/20 bg-orange-500/10 text-orange-300",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    rose: "border-rose-500/20 bg-rose-500/10 text-rose-300",
    yellow: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
  };

  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm font-medium ${colorMap[accentColor]}`}
    >
      {text}
    </div>
  );
}
