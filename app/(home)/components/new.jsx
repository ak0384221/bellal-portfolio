export default function DataWorkflow() {
  const steps = [
    {
      title: "Bronze Layer",
      subtitle: "Raw Data Ingestion",
      desc: "Collect raw data from CSV files, APIs, ERP systems, and CRM platforms. Data is stored as-is without transformations.",
      icon: "🟫",
      tag: "BRONZE",
    },
    {
      title: "Silver Layer",
      subtitle: "Cleaned & Standardized Data",
      desc: "Handle missing values, remove duplicates, standardize formats, and validate data quality for consistency across datasets.",
      icon: "⚪",
      tag: "SILVER",
    },
    {
      title: "Gold Layer",
      subtitle: "Business-Ready Data Models",
      desc: "Transform cleaned datasets into structured analytical models using ETL pipelines, joins, aggregations, and schema design.",
      icon: "🟨",
      tag: "GOLD",
    },
    {
      title: "BI Analyst Layer",
      subtitle: "Insights & Decision Making",
      desc: "Build dashboards, KPI systems, and reporting layers to generate insights that support strategic business decisions.",
      icon: "📊",
      tag: "BI",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <h2 className="text-2xl font-bold text-white mb-2">
        ⚡ Medallion Data Architecture Workflow
      </h2>
      <p className="text-neutral-400 text-sm mb-10 max-w-2xl">
        From raw ingestion to business intelligence using Bronze, Silver, Gold
        architecture.
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
