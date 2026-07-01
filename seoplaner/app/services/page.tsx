import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "IT Services — Development, Cloud, Security & Growth",
  description:
    "Full-service IT company: web and software development, cloud and DevOps, cybersecurity, IT consulting, and the SEO, AEO, and GEO growth services that get it all found.",
  alternates: { canonical: "/services" },
};

const buildServices = [
  {
    href: "/services/web-development",
    label: "Build — 01",
    name: "Web Development",
    description: "Fast, accessible, SEO-ready websites and web apps on modern frameworks.",
  },
  {
    href: "/services/software-development",
    label: "Build — 02",
    name: "Software Development",
    description: "Custom software, SaaS platforms, and API development, scoped through to production support.",
  },
  {
    href: "/services/cloud-devops",
    label: "Build — 03",
    name: "Cloud & DevOps",
    description: "Cloud architecture, migration, and CI/CD that keeps everything fast and reliable.",
  },
  {
    href: "/services/cybersecurity",
    label: "Build — 04",
    name: "Cybersecurity",
    description: "Security audits, penetration testing, and compliance support.",
  },
  {
    href: "/services/it-consulting",
    label: "Build — 05",
    name: "IT Consulting & Managed Services",
    description: "Technology roadmaps and day-to-day managed IT support.",
  },
];

const growthServices = [
  {
    href: "/services/seo",
    label: "Grow — 01",
    name: "Search Engine Optimization",
    description: "Technical SEO, content, and links that build durable Google rankings.",
  },
  {
    href: "/services/aeo",
    label: "Grow — 02",
    name: "Answer Engine Optimization",
    description: "Get selected as the direct answer in AI Overviews and voice assistants.",
  },
  {
    href: "/services/geo",
    label: "Grow — 03",
    name: "Generative Engine Optimization",
    description: "Become a source ChatGPT, Perplexity, and Gemini choose to cite.",
  },
  {
    href: "/services/content-strategy",
    label: "Grow — 04",
    name: "Content Strategy",
    description: "Editorial roadmaps mapped to real search and prompt intent.",
  },
];

type ServiceItem = { href: string; label: string; name: string; description: string };

function ServiceRow({ items }: { items: ServiceItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="group flex flex-col justify-between gap-4 rounded-2xl border border-paperline bg-white p-8 transition hover:border-signal hover:shadow-lg md:flex-row md:items-center"
        >
          <div>
            <span className="font-mono text-xs font-semibold text-cited">{s.label}</span>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">{s.name}</h3>
            <p className="mt-2 max-w-xl font-body text-sm text-slate">{s.description}</p>
          </div>
          <span className="shrink-0 font-body text-sm font-semibold text-signal opacity-0 transition group-hover:opacity-100">
            Learn more →
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">Services</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            Everything it takes to build IT — and get it found.
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg text-slate">
            One team for development, cloud, and security — plus the SEO, AEO, and GEO practice
            that makes sure what we build actually gets discovered on Google and by AI.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">Build</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Core IT services
          </h2>
          <div className="mt-8">
            <ServiceRow items={buildServices} />
          </div>
        </Container>
      </section>

      <section className="border-t border-paperline bg-white py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">Grow</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Search & AI visibility
          </h2>
          <p className="mt-3 max-w-xl font-body text-slate">
            SEOPlaner's original specialty, and the layer most IT vendors skip entirely.
          </p>
          <div className="mt-8">
            <ServiceRow items={growthServices} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
