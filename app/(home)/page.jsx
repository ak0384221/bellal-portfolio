import { frontendTech, contacts, projects } from "@/app/data";
import MySVG from "@/app/svg";
import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import Footer from "@/app/(home)/components/Footer";
import Header from "@/app/(home)/components/Header";
import Projects from "@/app/(home)/components/Projects";

import TechMaker from "./components/TechMaker";

export default function Home() {
  return (
    <div className="page  md:w-1/2 mx-auto p-4 space-y-5">
      <Header />

      <section className="">
        <Heading>I have worked with</Heading>
        <section className="   ">
          <div className="columns-2  rounded-md ">
            {Object.entries(frontendTech).map(([category, items], id) => (
              <TechMaker key={id} category={category} items={items} />
            ))}
          </div>
        </section>
      </section>

      <section>
        <Heading>I'm</Heading>
        <Paragraph>
          Bellal,a Javascript based Full Stack Developer with hands-on
          experience building secure, scalable web applications using Node.js,
          Express, React,Next and TypeScript, specializing in high-performance
          REST APIs and role-based systems. Experienced in cloud deployments,
          CI/CD workflows, database and schema design and performance
          optimization, with a strong focus on security, maintainability, and
          production reliability.
        </Paragraph>
      </section>

      <section>
        <Heading> projects that defines my dev journey</Heading>
        {projects.map((project, id) => (
          <Projects key={id} project={project} />
        ))}
      </section>

      <Footer contacts={contacts} />
    </div>
  );
}
