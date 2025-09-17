import { saira } from "@/app/layout";

export default function Heading({ textSize = "2xl", children }) {
  return (
    <h2
      className={`text-${textSize}  font-bold font capitalize mb-2 bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-900 bg-clip-text text-transparent ${saira.className}`}
    >
      {children}
    </h2>
  );
}
