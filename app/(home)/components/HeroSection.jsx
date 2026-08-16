import { ubuntu } from "@/app/layout";
import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";
import SkillPill from "./SkillPill";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <section
      className="relative rounded-3xl border border-red-500/10 
    bg-[#070606] md:p-2"
    >
      {/* Glow effects */}
      <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 p-3">
        {/* Main Heading */}
        <div className="max-w-4xl">
          <h2
            className={`${ubuntu.className} text-3xl md:text-5xl font-black leading-[0.95] text-[#f8f1ed] tracking-[-0.06em]`}
          >
            Focused on
            <span className="block md:inline text-orange-300 ml-0 md:ml-2">
              Linux System Administration
            </span>
          </h2>

          <Paragraph className="mt-6 md:mt-8 text-slate-300">
            I am an aspiring{" "}
            <span className="text-orange-300 font-semibold">
              System Engineer
            </span>{" "}
            and{" "}
            <span className="text-red-300 font-semibold">Linux enthusiast</span>{" "}
            building practical expertise in enterprise Linux administration,
            storage configuration, and secure infrastructure operations. My
            focus is on real-world system management, access control,
            troubleshooting, and hardening practices aligned with RHCSA-level
            responsibilities.
          </Paragraph>
        </div>

        {/* Skill Pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          <SkillPill text="Linux Administration" accentColor="red" />
          <SkillPill text="LVM & Storage" accentColor="orange" />
          <SkillPill text="SSH Hardening" accentColor="amber" />
          <SkillPill text="Firewall & Networking" accentColor="rose" />
        </div>

        {/* Hero Cards Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <HeroCard
            label="Focus"
            title="RHEL • Ubuntu • Linux"
            description="Managing systems, accounts, storage, and secure server operations."
          />
          <HeroCard
            label="Skills"
            title="LVM • ACLs • sudo"
            description="Controlling access, optimizing storage, and strengthening Linux security."
          />
          <HeroCard
            label="Stack"
            title="Bash • SSH • iptables"
            description="Supporting practical server administration through automation and hardening."
          />
        </div>
      </div>
    </section>
  );
}
