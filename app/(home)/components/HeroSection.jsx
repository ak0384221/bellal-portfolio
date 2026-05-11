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
            Building Systems That Turn
            <span className="block md:inline bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent ml-0 md:ml-2">
              Raw Data Into Business Intelligence
            </span>
          </h2>

          <Paragraph className="mt-6 md:mt-8">
            I specialize in building end-to-end data solutions by combining{" "}
            <span className="text-cyan-300 font-semibold">Data Analytics</span>,{" "}
            <span className="text-violet-300 font-semibold">
              Data Engineering (ETL Pipelines)
            </span>
            , and{" "}
            <span className="text-yellow-300 font-semibold">
              Busness Intelligence
            </span>
            . I design and implement scalable data systems, robust
            transformation pipelines, and interactive dashboards that turn raw
            data into actionable business intelligence. My focus is on
            delivering clean, reliable datasets and performance-driven analytics
            solutions using SQL, modern data architectures, and data engineering
            best practices.
          </Paragraph>
        </div>

        {/* Skill Pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <SkillPill text="SQL & Data Warehousing" accentColor="cyan" />
          <SkillPill text="ETL Pipelines" accentColor="violet" />
          <SkillPill text="Dashboard & KPI Systems" accentColor="yellow" />
          <SkillPill text="Data Modeling" accentColor="emerald" />
        </div>

        {/* Hero Cards Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <HeroCard
            label="Focus"
            title="Data Engineering"
            description="Building structured pipelines and scalable warehouse systems."
          />
          <HeroCard
            label="Analytics"
            title="KPI & Insights"
            description="Transforming datasets into business-focused reporting systems."
          />
          <HeroCard
            label="Stack"
            title="SQL • Power BI • Excel • Power Query"
            description="Combining analytics, Business Intelligence, and modern web technologies For Process automation."
          />
        </div>
      </div>
    </section>
  );
}
