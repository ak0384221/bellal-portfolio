import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";

export default function AboutSection() {
  return (
    <section className="space-y-4 my-8">
      <Heading>I'm</Heading>
      <Paragraph>
        Bellal, a JavaScript-based Full Stack Developer with hands-on experience
        building secure, scalable web applications using Node.js, Express,
        React, Next.js, and TypeScript, specializing in high-performance REST
        APIs and role-based systems. Experienced in cloud deployments, CI/CD
        workflows, database and schema design, and performance optimization,
        with a strong focus on security, maintainability, and production
        reliability.
      </Paragraph>
    </section>
  );
}
