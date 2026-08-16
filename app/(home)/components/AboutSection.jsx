import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";

export default function AboutSection() {
  return (
    <section className="space-y-4 my-8 rounded-2xl border border-lime-500/10 bg-[#0d0f0d] p-5">
      <Heading>About Me</Heading>
      <Paragraph className="text-slate-300">
        I am an aspiring System Engineer with a strong focus on Linux system
        administration, enterprise storage operations, and security
        fundamentals. My hands-on learning has centered on user and permission
        management, LVM configuration, firewall hardening, SSH lockdown, and
        reliable troubleshooting in Linux environments.
      </Paragraph>
    </section>
  );
}
