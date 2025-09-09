import { frontendTech, contacts, projects } from "@/app/data";
import MySVG from "@/app/svg";
import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import Footer from "@/app/(home)/components/Footer";
import Header from "@/app/(home)/components/Header";
import Projects from "@/app/(home)/components/Projects";
import Techs from "@/app/(home)/components/Techs";
export default function Home() {
  return (
    <div className="page  md:w-1/2 mx-auto p-5 space-y-10">
      <Header />

      <section>
        <Heading>What i know</Heading>
        <ul
          className="flex border  py-6 md:py-10 md:px-4 justify-center items-center flex-wrap gap-2 border-neutral-800 relative bg-[#000000]
     "
        >
          {frontendTech.map((techs, index) => (
            <Techs key={index} techs={techs} />
          ))}

          <MySVG />
        </ul>
      </section>

      <section>
        <Heading>I'm</Heading>
        <Paragraph>
          Ayaan, a frontend enthusiast who enjoys turning ideas into interactive
          web experiences. I focus on React, Next.js, and Tailwind CSS to create
          fast, user-friendly, and beautiful interfaces.
        </Paragraph>
      </section>

      <section>
        <Heading> projects that defines my dev journey</Heading>
        {projects.map((project, index) => {
          return <Projects key={index} project={project} />;
        })}
      </section>

      <Footer contacts={contacts} />
    </div>
  );
}
