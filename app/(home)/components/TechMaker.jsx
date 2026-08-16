import { ubuntu, ubuntuMono } from "@/app/layout";

export default function TechMaker({ category, items }) {
  return (
    <div
      className="
        group relative p-2
        rounded-lg
        border border-red-500/30
        bg-[#000000]
        cursor-pointer
        break-inside-avoid
        transition-all duration-300
        backdrop-blur-sm
      "
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Category Title */}
      <h3
        className={`text-base text-[#edf6ee] mb-3 capitalize font-bold tracking-[-0.03em] ${ubuntu.className}`}
      >
        {category
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())}
      </h3>

      {/* Items List */}
      <ul className="ml-1 list-disc list-inside space-y-1.5 text-sm">
        {items.map((item) => (
          <li
            key={item}
            className={`
              ${ubuntuMono.className}
              text-slate-400
              hover:text-slate-200
              transition-colors duration-200
              font-light
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
