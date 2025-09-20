import { saira } from "@/app/layout";
const sizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};
export default function Heading({ textSize = "2xl", children }) {
  return (
    <h2
      className={`${sizeMap[textSize]}  font-bold font capitalize mb-2 dark:bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-900 bg-clip-text  dark:text-transparent text-neutral-800 ${saira.className}`}
    >
      {children}
    </h2>
  );
}
