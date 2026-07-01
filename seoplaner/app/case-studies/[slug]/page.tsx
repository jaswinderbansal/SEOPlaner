import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.client} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client} case study`,
    datePublished: study.date,
    author: { "@type": "Organization", name: "SEOPlaner" },
    publisher: { "@type": "Organization", name: "SEOPlaner" },
    description: study.summary,
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">{study.industry} · Case study</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            {study.client}
          </h1>
          <p className="mt-5 max-w-2xl font-body text-lg text-slate">{study.summary}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-paperline bg-white p-6">
              <p className="font-display text-2xl font-bold text-signal">{r.value}</p>
              <p className="mt-1 font-mono text-xs text-slate">{r.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-y border-paperline bg-white py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">The challenge</h2>
            <p className="mt-4 font-body text-slate">{study.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Our approach</h2>
            <ul className="mt-4 space-y-3">
              {study.approach.map((a) => (
                <li key={a} className="flex items-start gap-3 font-body text-sm text-ink">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Want results like this?"
        subtitle="Tell us about your business and we'll show you where the fastest wins are."
      />
    </>
  );
}
