import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from SEOPlaner's SEO, AEO, and GEO work with IT and software companies — organic traffic, rankings, and AI citations.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">Case studies</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            Results, not just methodology.
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg text-slate">
            A sample of engagements across DevOps, fintech infrastructure, and managed IT
            services.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-paperline bg-white p-7 transition hover:border-signal hover:shadow-lg"
            >
              <span className="font-mono text-xs font-semibold text-cited">{c.industry}</span>
              <h2 className="mt-3 font-display text-xl font-bold text-ink">{c.client}</h2>
              <p className="mt-2 flex-1 font-body text-sm text-slate">{c.summary}</p>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-paperline pt-4">
                {c.results.slice(0, 2).map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-lg font-bold text-ink">{r.value}</p>
                    <p className="font-mono text-[11px] text-slate">{r.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
