import Container from "./Container";
import CTASection from "./CTASection";
import FAQ, { FAQItem } from "./FAQ";
import JsonLd from "./JsonLd";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  pillars: { title: string; detail: string }[];
  deliverables: string[];
  faqs: FAQItem[];
};

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceName,
    provider: { "@type": "Organization", name: "SEOPlaner" },
    description: data.serviceDescription,
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">{data.eyebrow}</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-2xl font-body text-lg text-slate">{data.intro}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            What this covers
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {data.pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-paperline bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 font-body text-sm text-slate">{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-paperline bg-white py-16 md:py-24">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            What you get
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {data.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 font-body text-sm text-ink">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FAQ items={data.faqs} />
      <CTASection />
    </>
  );
}
