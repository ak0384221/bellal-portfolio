import { ubuntu, ubuntuMono } from "@/app/layout";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-red-500/10 bg-[#120d0d] p-6 md:p-8">
      <div className="absolute -top-20 left-0 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm text-red-300 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
        DevOps Engineer • Full-Stack Developer • Linux Administrator
      </div>

      <div className="max-w-4xl">
        <h2
          className={`${ubuntu.className} text-3xl md:text-4xl font-black leading-[1] text-[#f8f1ed] tracking-[-0.06em]`}
        >
          Building resilient,
          <span className="text-red-300"> deployment-ready systems</span>.
        </h2>

        <p
          className={`${ubuntuMono.className} mt-5 text-[15px] leading-8 text-slate-300 md:text-base`}
        >
          I am a DevOps-focused engineer with practical experience in{" "}
          <span className="font-semibold text-red-300">
            Linux administration
          </span>
          , <span className="font-semibold text-orange-300">Docker</span>,{" "}
          <span className="font-semibold text-red-300">GitHub Actions</span>,{" "}
          <span className="font-semibold text-orange-300">Git/GitHub</span>, and
          deployment workflows. I also support backend/frontend delivery as a
          full-stack developer, with a strong understanding of Linux system
          security, automation, and cloud-ready infrastructure practices.
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
          DevOps
        </div>

        <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
          Docker & CI/CD
        </div>

        <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
          GitHub Actions
        </div>

        <div className="rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-300">
          Linux Admin
        </div>

        <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
          Full-Stack Support
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-red-500/10 bg-[#1a1110] p-4">
          <p
            className={`${ubuntuMono.className} text-xs uppercase tracking-[0.12em] text-red-300`}
          >
            Focus
          </p>
          <h3
            className={`${ubuntu.className} mt-2 text-lg font-bold text-[#f8f1ed]`}
          >
            Linux Operations
          </h3>
          <p
            className={`${ubuntuMono.className} mt-2 text-sm leading-6 text-slate-400`}
          >
            Managing users, storage, packages, and system reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/10 bg-[#1a1110] p-4">
          <p
            className={`${ubuntuMono.className} text-xs uppercase tracking-[0.12em] text-red-300`}
          >
            Security
          </p>
          <h3
            className={`${ubuntu.className} mt-2 text-lg font-bold text-[#f8f1ed]`}
          >
            Hardening & Access
          </h3>
          <p
            className={`${ubuntuMono.className} mt-2 text-sm leading-6 text-slate-400`}
          >
            Applying secure access practices, firewall controls, and logging
            review.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/10 bg-[#1a1110] p-4">
          <p
            className={`${ubuntuMono.className} text-xs uppercase tracking-[0.12em] text-red-300`}
          >
            Stack
          </p>
          <h3
            className={`${ubuntu.className} mt-2 text-lg font-bold text-[#f8f1ed]`}
          >
            RHEL • Ubuntu • Bash
          </h3>
          <p
            className={`${ubuntuMono.className} mt-2 text-sm leading-6 text-slate-400`}
          >
            Building practical administration skills through hands-on Linux
            workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
