import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";

export default function AboutSection() {
  return (
    <section className="space-y-4 my-8">
      <Heading>About Me</Heading>
      <Paragraph>
        I bring hands-on experience across software development, data analysis,
        and Linux systems administration. He has worked on web applications,
        data workflows and dashboards, and secure infrastructure operations.
        From backend services and REST APIs to SQL-driven reporting and Linux
        server hardening, his work reflects practical experience across
        technical and business-focused environments.
      </Paragraph>
    </section>
  );
}
