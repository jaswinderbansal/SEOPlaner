import Link from "next/link";
import Container from "./Container";

export default function CTASection({
  title = "Ready to see where you stand?",
  subtitle = "Get a free visibility audit covering SEO, AEO, and GEO — delivered in under 5 business days.",
  buttonLabel = "Request your audit",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-ink py-16 md:py-24">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-paper md:text-4xl">{title}</h2>
          <p className="mt-3 font-body text-paper/70">{subtitle}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-signal px-7 py-4 font-body text-sm font-semibold text-paper transition hover:bg-signal/90"
        >
          {buttonLabel}
        </Link>
      </Container>
    </section>
  );
}
