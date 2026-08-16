import { ubuntu, ubuntuMono } from "@/app/layout";

export default function DataWorkflow() {
  const steps = [
    {
      title: "Manage & Secure",
      subtitle: "Linux Access Control",
      desc: "Create and maintain users, groups, sudo privileges, password policy enforcement, and least-privilege access controls for safer systems.",
      icon: "🔐",
      tag: "IAM",
    },
    {
      title: "Store & Scale",
      subtitle: "LVM & Filesystems",
      desc: "Configure partitions, extend volume groups, resize logical volumes, and manage persistent mounts to keep storage reliable and scalable.",
      icon: "💾",
      tag: "STORAGE",
    },
    {
      title: "Protect & Monitor",
      subtitle: "SSH & Network Hardening",
      desc: "Harden SSH, apply firewall rules, monitor logs, and reduce attack surface through practical Linux security controls.",
      icon: "🛡️",
      tag: "SEC",
    },
    {
      title: "Operate & Troubleshoot",
      subtitle: "System Reliability",
      desc: "Use package management, log review, service monitoring, and troubleshooting workflows to keep Linux servers stable and production-ready.",
      icon: "⚙️",
      tag: "OPS",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h2
        className={`${ubuntu.className} text-2xl font-bold text-[#edf6ee] mb-2 tracking-[-0.04em]`}
      >
        ⚡ Linux operations focus
      </h2>
      <p
        className={`${ubuntuMono.className} text-slate-400 text-sm mb-10 max-w-2xl leading-relaxed`}
      >
        Hands-on experience across Linux administration, storage, security, and
        system support built through structured labs and RHCSA-focused practice.
      </p>

      {/* Timeline */}
      <div className="relative border-l border-neutral-800 pl-6 space-y-5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Node */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full border border-lime-500/40 bg-[#0b120d] group-hover:border-lime-300 transition" />

            {/* Card */}
            <div
              className="
                p-4 rounded-lg
                border border-lime-500/10
                bg-[#0d1713]
                hover:border-lime-500/25
                transition
                flex flex-col md:flex-row md:justify-between md:items-start
                gap-3
              "
            >
              {/* Left */}
              <div className="min-w-[240px]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{step.icon}</span>

                  <h3 className="text-white font-semibold">{step.title}</h3>

                  {/* Layer badge */}
                  <span
                    className="
                      text-[10px] px-2 py-[2px]
                      rounded-full border
                      border-neutral-700 text-neutral-400
                    "
                  >
                    {step.tag}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 mt-1">{step.subtitle}</p>
              </div>

              {/* Right */}
              <p className="text-sm text-neutral-300 md:flex-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
