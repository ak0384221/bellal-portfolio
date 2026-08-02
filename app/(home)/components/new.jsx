export default function DataWorkflow() {
  const steps = [
    {
      title: "Develop & Deliver",
      subtitle: "Software Solutions",
      desc: "Build web applications, APIs, and backend systems using JavaScript, React, Node.js, and modern development practices.",
      icon: "💻",
      tag: "DEV",
    },
    {
      title: "Analyze & Model",
      subtitle: "Data & Insights",
      desc: "Turn business data into structured reporting, dashboards, ETL workflows, and KPI-driven insights using SQL and analytics techniques.",
      icon: "📊",
      tag: "DATA",
    },
    {
      title: "Secure & Operate",
      subtitle: "Linux Infrastructure",
      desc: "Manage users, permissions, filesystems, networking, firewalls, and hardening tasks to keep systems safe and reliable.",
      icon: "🛡️",
      tag: "SYS",
    },
    {
      title: "Improve & Scale",
      subtitle: "Reliable Operations",
      desc: "Focus on automation, monitoring, maintainability, and performance so development, analytics, and infrastructure work together seamlessly.",
      icon: "⚙️",
      tag: "OPS",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h2 className="text-2xl font-bold text-white mb-2">
        ⚡ Experience across domains
      </h2>
      <p className="text-neutral-400 text-sm mb-10 max-w-2xl">
        A practical blend of development, data, and systems work shaped by real
        projects and hands-on experience across multiple technical areas.
      </p>

      {/* Timeline */}
      <div className="relative border-l border-neutral-800 pl-6 space-y-5">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Node */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full border border-neutral-600 bg-black group-hover:border-emerald-400 transition" />

            {/* Card */}
            <div
              className="
                p-4 rounded-lg
                border border-neutral-800
                bg-neutral-950/40
                hover:border-emerald-500/40
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
