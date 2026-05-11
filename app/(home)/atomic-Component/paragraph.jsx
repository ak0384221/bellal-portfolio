import { inter } from "@/app/layout";

export default function Paragraph({ children, className = "" }) {
  return (
    <p
      className={`${inter.className} font-light  text-sm leading-relaxed text-slate-300 tracking-wide ${className}`}
    >
      {children}
    </p>
  );
}
