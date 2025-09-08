import Link from "next/link";
import { ubuntuMono } from "../../layout";

export default function ShowLnk({ children, href }) {
  console.log(children);
  return (
    <Link className={`${ubuntuMono.className} font-light`} href={href}>
      {children}
    </Link>
  );
}
