import { ubuntuMono } from "@/app/layout";

export default function Paragraph({ children, className = "" }) {
  return (
    <p
      className={`${ubuntuMono.className} font-light text-sm leading-relaxed text-slate-300 tracking-[0.02em] ${className}`}
    >
      {children}
    </p>
  );
}
