import Heading from "@/app/(home)/atomic-Component/heading";
import Paragraph from "@/app/(home)/atomic-Component/paragraph";

export default function WorkflowStep({ step, index }) {
  const colorClasses = {
    "from-orange-500/20 to-orange-400/5": "border-orange-500/30",
    "from-slate-500/20 to-slate-400/5": "border-slate-400/20",
    "from-yellow-500/20 to-yellow-400/5": "border-yellow-500/30",
    "from-cyan-500/20 to-cyan-400/5": "border-cyan-500/30",
  };

  const borderClass = colorClasses[step.color] || "border-white/10";

  return (
    <div key={index} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-5 items-start">
        {/* Left Card */}
        <div
          className={`relative overflow-hidden rounded-lg border
            bg-gradient-to-br ${step.color}
            ${borderClass}
            ${step.glow}
            p-4 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl flex-shrink-0">{step.icon}</div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-white">
                <Heading textSize="lg">{step.title}</Heading>
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                <Paragraph className="text-xs font-light">
                  {step.subtitle}
                </Paragraph>
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="pt-1">
          <Paragraph className="text-sm text-slate-300">{step.desc}</Paragraph>
        </div>
      </div>
    </div>
  );
}
