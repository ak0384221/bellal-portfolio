import { ubuntu } from "@/app/layout";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import SkillPill from "./SkillPill";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <section
      className="relative rounded-3xl border border-red-500/10 
    bg-[#070606] md:p-2"
    >
      <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 p-3">
        <div className="max-w-4xl">
          <h2
            className={`${ubuntu.className} text-3xl md:text-5xl font-black leading-[0.95] text-[#f8f1ed] tracking-[-0.06em]`}
          >
            DevOps-first
            <span className="block md:inline text-orange-300 ml-0 md:ml-2">
              engineer with <br /> cloud & full-stack experience
            </span>
          </h2>

          <Paragraph className="mt-6 md:mt-8 text-slate-300">
            I am a DevOps-focused engineer with hands-on experience in{" "}
            <span className="text-orange-300 font-semibold">
              Linux administration
            </span>
            {", "}
            <span className="text-red-300 font-semibold">AWS</span>,{" "}
            <span className="text-orange-300 font-semibold">Terraform</span>,{" "}
            <span className="text-red-300 font-semibold">Docker</span>, and{" "}
            <span className="text-orange-300 font-semibold">
              GitHub Actions CI/CD
            </span>
            . I have built containerized full-stack deployments, practiced
            highly available AWS architectures, and developed Linux
            administration and automation skills.
          </Paragraph>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <SkillPill text="Linux" accentColor="rose" />
          <SkillPill text="AWS" accentColor="yellow" />
          <SkillPill text="Terraform" accentColor="amber" />
          <SkillPill text="Docker" accentColor="orange" />
          <SkillPill text="GitHub Actions" accentColor="red" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <HeroCard
            label="Focus"
            title="AWS • Terraform • EC2"
            description="Building cloud infrastructure with networking, scaling, and availability in mind."
          />
          <HeroCard
            label="Systems"
            title="RHEL • Ubuntu • LVM"
            description="Managing Linux users, storage, filesystems, and secure server operations."
          />
          <HeroCard
            label="Delivery"
            title="Docker • CI/CD • Bash"
            description="Automating builds and publishing container images for full-stack applications."
          />
        </div>
      </div>
    </section>
  );
}
