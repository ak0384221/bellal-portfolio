import { inter, roboto } from "../../layout";

export default function Paragraph({ children }) {
  return (
    <p
      className={`my-2 ${inter.className} font-extralight text-md tracking-wide bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent`}
    >
      {children}
    </p>
  );
}
