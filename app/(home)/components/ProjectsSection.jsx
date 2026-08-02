import Heading from "@/app/(home)/atomic-Component/heading";
import Projects from "./Projects";

export default function ProjectsSection({ projects }) {
  return (
    <section className="space-y-5">
      <Heading textSize="2xl">
        Projects that reflect my multi-role journey
      </Heading>

      <div className="space-y-4">
        {projects.map((project, id) => (
          <Projects key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
