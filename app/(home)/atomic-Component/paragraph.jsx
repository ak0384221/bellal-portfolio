import { inter } from "@/app/layout";

export default function Paragraph({ children }) {
  return (
    <p
      className={`my-2 ${inter.className} font-extralight text-md tracking-wide bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text dark:text-transparent text-black`}
    >
      {children}
    </p>
  );
}
