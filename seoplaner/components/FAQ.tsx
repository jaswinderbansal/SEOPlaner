import JsonLd from "./JsonLd";

export type FAQItem = { question: string; answer: string };

export default function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="border-t border-paperline py-16 md:py-24">
      <JsonLd data={schema} />
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">{title}</h2>
        <dl className="mt-8 divide-y divide-paperline">
          {items.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-display text-lg font-semibold text-ink">{item.question}</dt>
              <dd className="mt-2 max-w-2xl font-body text-slate">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
