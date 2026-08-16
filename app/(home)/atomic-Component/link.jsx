import Link from "next/link";
import { ubuntuMono } from "@/app/layout";

export default function ShowLink({ children, href, className = "" }) {
  return (
    <Link
      className={`${ubuntuMono.className} font-light text-lime-300 hover:text-lime-200 transition-colors ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
