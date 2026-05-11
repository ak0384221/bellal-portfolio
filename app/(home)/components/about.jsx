<section className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#07101f] p-6 md:p-8">
  {/* glow effects */}
  <div className="absolute -top-20 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

  <div className="relative z-10">
    {/* top badge */}
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      Data Analyst • ETL Engineer • Developer
    </div>

    {/* heading */}
    <div className="max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
        Building Systems That Turn
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          {" "}
          Raw Data{" "}
        </span>
        Into Business Intelligence.
      </h2>

      <p className="mt-5 text-[15px] leading-8 text-slate-400 md:text-base">
        I combine{" "}
        <span className="font-semibold text-cyan-300">Data Analytics</span>,{" "}
        <span className="font-semibold text-violet-300">ETL Engineering</span>,
        and{" "}
        <span className="font-semibold text-yellow-300">
          Software Development
        </span>{" "}
        to build scalable systems, analytical pipelines, dashboards, and
        business-focused applications. My focus is transforming complex datasets
        into structured, actionable insights using SQL, modern data
        architectures, and backend engineering principles.
      </p>
    </div>

    {/* skill pills */}
    <div className="mt-7 flex flex-wrap gap-3">
      <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
        SQL & Data Warehousing
      </div>

      <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
        ETL Pipelines
      </div>

      <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
        Dashboard & KPI Systems
      </div>

      <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
        Data Modeling
      </div>

      <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
        Backend Engineering
      </div>
    </div>

    {/* bottom cards */}
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Focus
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">Data Engineering</h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Building structured pipelines and scalable warehouse systems.
        </p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Analytics
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">KPI & Insights</h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Transforming datasets into business-focused reporting systems.
        </p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Stack
        </p>

        <h3 className="mt-2 text-lg font-bold text-white">
          SQL • Power BI • Next.js
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Combining analytics, backend systems, and modern web technologies.
        </p>
      </div>
    </div>
  </div>
</section>;
