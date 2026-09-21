import { ubuntu, ubuntuMono } from "@/app/layout";

export default function CertificatesSection({ certificates }) {
  return (
    <section className="space-y-5 py-8">
      <h2
        className={`${ubuntu.className} text-2xl font-bold text-[#edf6ee] tracking-[-0.04em]`}
      >
        Training & Certifications
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="rounded-xl border border-red-500/10 bg-[#130f0d] p-4 transition hover:border-red-500/25 hover:bg-[#1a1413]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  className={`${ubuntuMono.className} text-[10px] uppercase tracking-[0.12em] text-red-300`}
                >
                  {certificate.provider}
                </p>
                <h3
                  className={`${ubuntu.className} mt-2 text-lg font-bold text-[#f8f1ed] leading-snug`}
                >
                  {certificate.name}
                </h3>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-emerald-300">
                {certificate.status}
              </span>
            </div>

            <p
              className={`${ubuntuMono.className} mt-4 text-sm text-slate-400`}
            >
              Year: <span className="text-slate-200">{certificate.year}</span>
            </p>

            {certificate.link && certificate.link !== "#" ? (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-md border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200 transition hover:border-red-400 hover:bg-red-500/15"
              >
                View Certificate →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
