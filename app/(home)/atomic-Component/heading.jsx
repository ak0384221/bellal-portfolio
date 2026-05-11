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

export default function Heading({
  textSize = "2xl",
  children,
  className = "",
}) {
  return (
    <h2
      className={`${sizeMap[textSize]} font-bold text-left capitalize text-white ${saira.className} ${className}`}
    >
      {children}
    </h2>
  );
}
