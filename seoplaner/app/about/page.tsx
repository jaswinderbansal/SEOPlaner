import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About SEOPlaner",
  description:
    "SEOPlaner is a search and AI visibility agency built for IT and software companies — combining SEO, AEO, and GEO under one measurable roadmap.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Measured, not marketed",
    detail: "Every recommendation is tied to a metric we report on monthly — rankings, traffic, or tracked AI citations.",
  },
  {
    title: "Built for engineers, too",
    detail: "We speak in tickets, PRs, and deploy windows, because most of our clients' teams do.",
  },
  {
    title: "Ahead of the channel shift",
    detail: "We track how search and AI answer engines evolve so your roadmap adapts before rankings do, not after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="eyebrow text-signal">About</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            We built SEOPlaner because IT vendors and visibility teams shouldn't be separate.
          </h1>
          <p className="mt-6 font-body text-lg text-slate">
            Most companies hire a development shop to build the thing, then a separate agency to
            make it findable — and the two rarely talk. SEOPlaner is a full-service IT company —
            web and software development, cloud, DevOps, and cybersecurity — with an in-house
            SEO, AEO, and GEO practice built into the same team, so what we ship is discoverable
            on Google and cited by AI answer engines from day one.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            How we work with clients
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-paperline bg-white p-7">
                <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 font-body text-sm text-slate">{v.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Let's talk about your roadmap" />
    </>
  );
}
