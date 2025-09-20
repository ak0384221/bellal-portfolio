import Link from "next/link";
import { ubuntuMono } from "@/app/layout";

export default function ShowLnk({ children, href }) {
  return (
    <Link className={`${ubuntuMono.className} font-light `} href={href}>
      {children}
    </Link>
  );
}
