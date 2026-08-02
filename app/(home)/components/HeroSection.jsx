import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import SkillPill from "./SkillPill";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <section className="relative   rounded-3xl   to-slate-950  md:p-2 ">
      {/* Glow effects */}
      <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Main Heading */}
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
            Experience Across
            <span className="block md:inline bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent ml-0 md:ml-2">
              Software, Data, and Infrastructure
            </span>
          </h2>

          <Paragraph className="mt-6 md:mt-8">
            I have worked across{" "}
            <span className="text-cyan-300 font-semibold">
              Software Development
            </span>
            ,{" "}
            <span className="text-violet-300 font-semibold">Data Analysis</span>
            , and{" "}
            <span className="text-yellow-300 font-semibold">
              Linux Systems Administration
            </span>
            . My background includes building web applications, designing
            SQL-based reporting and ETL workflows, and supporting secure Linux
            environments with hands-on experience in networking, hardening, and
            system reliability.
          </Paragraph>
        </div>

        {/* Skill Pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <SkillPill text="Full-Stack Development" accentColor="cyan" />
          <SkillPill text="Linux Administration" accentColor="violet" />
          <SkillPill text="Data Analytics & BI" accentColor="yellow" />
          <SkillPill text="System Security" accentColor="emerald" />
        </div>

        {/* Hero Cards Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <HeroCard
            label="Experience"
            title="Across Sectors"
            description="Applying software, data, and systems knowledge in real projects."
          />
          <HeroCard
            label="Analytics"
            title="SQL • BI • KPIs"
            description="Turning raw information into dashboards, insights, and reporting workflows."
          />
          <HeroCard
            label="Stack"
            title="React • Node • Linux • SQL"
            description="Combining development, automation, and systems knowledge for practical solutions."
          />
        </div>
      </div>
    </section>
  );
}
