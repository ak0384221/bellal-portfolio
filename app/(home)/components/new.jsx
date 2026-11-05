import { ubuntu, ubuntuMono } from "@/app/layout";

export default function DataWorkflow() {
  const steps = [
    {
      title: "Automate & Standardize",
      subtitle: "CI/CD, Scripting, Git",
      desc: "Build repeatable workflows using Bash, GitHub Actions, version control, and automation to reduce manual errors and improve deployment consistency.",
      icon: "⚙️",
      tag: "AUTOMATION",
    },
    {
      title: "Package & Deploy",
      subtitle: "Docker, Containers, Releases",
      desc: "Containerize applications, manage Docker images, and support deployment pipelines that make builds portable, testable, and production-ready.",
      icon: "🐳",
      tag: "CONTAINER",
    },
    {
      title: "Secure & Stabilize",
      subtitle: "Linux Hardening, Access Control",
      desc: "Protect systems through SSH hardening, firewall rules, permission management, and least-privilege access to keep infrastructure secure and reliable.",
      icon: "🔐",
      tag: "SECURITY",
    },
    {
      title: "Monitor & Troubleshoot",
      subtitle: "Logs, Health, Incident Response",
      desc: "Review logs, diagnose system issues, monitor service health, and resolve production problems quickly to improve uptime and system resilience.",
      icon: "📊",
      tag: "OBSERVABILITY",
    },
    {
      title: "Operate in Cloud",
      subtitle: "AWS, Terraform, Highly Available Infrastructure",
      desc: "Build AWS environments with VPC networking, EC2, load balancing, and Auto Scaling, and use Terraform to provision infrastructure as code.",
      icon: "☁️",
      tag: "CLOUD",
    },
    {
      title: "Collaborate & Document",
      subtitle: "Team Delivery, Knowledge Sharing",
      desc: "Support team delivery through Git-based workflows, clear documentation, environment awareness, and practical communication across engineering and operations.",
      icon: "🤝",
      tag: "TEAMWORK",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2
        className={`${ubuntu.className} text-2xl font-bold text-[#edf6ee] mb-2 tracking-[-0.04em]`}
      >
        ⚡ DevOps qualities and operational focus
      </h2>
      <p
        className={`${ubuntuMono.className} text-slate-400 text-sm mb-10 max-w-2xl leading-relaxed`}
      >
        Strong DevOps readiness requires automation, secure infrastructure,
        containerization, release discipline, monitoring, and clear
        collaboration. This portfolio reflects that mindset through Linux
        operations, Git-driven workflows, Docker-based delivery, and practical
        full-stack support.
      </p>

      <div className="relative border-l border-neutral-800 pl-6 space-y-5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full border border-lime-500/40 bg-[#0b120d] group-hover:border-lime-300 transition" />

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
              <div className="min-w-[240px]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{step.icon}</span>
                  <h3 className="text-white font-semibold">{step.title}</h3>
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

              <p className="text-sm text-neutral-300 md:flex-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
