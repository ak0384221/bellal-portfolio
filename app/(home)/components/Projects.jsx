import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import { inter, ubuntuMono } from "@/app/layout";
import Link from "next/link";
import Heading from "@/app/(home)/atomic-Component/heading";

export default function Projects({ project }) {
  return (
    <article className="border p-2 border-neutral-800  mb-5">
      <Heading> {project?.name}</Heading>
      <p className={`${inter.className} text-xs font-extralight my-1`}>
        {project?.tech.join(" | ")}
      </p>

      <Paragraph>{project?.summary}</Paragraph>

      <Link
        href={project?.github}
        className={`${ubuntuMono.className} font-light text-neutral-300`}
      >
        <p>{project?.live}</p>
      </Link>
      <Link
        href={project?.live}
        className={`${ubuntuMono.className} font-light text-neutral-300`}
      >
        <p> {project?.github}</p>
      </Link>
    </article>
  );
}
