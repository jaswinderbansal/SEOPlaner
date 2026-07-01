import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free SEO, AEO, and GEO visibility audit from SEOPlaner — delivered within 5 business days.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-14 md:grid-cols-2">
        <div>
          <p className="eyebrow text-signal">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Get your free visibility audit.
          </h1>
          <p className="mt-5 max-w-md font-body text-lg text-slate">
            Tell us about your business and we'll send back a scoped review of where you stand
            across search rankings and AI answer engines — no obligation.
          </p>
          <div className="mt-8 space-y-3 font-body text-sm text-ink">
            <p>
              <span className="font-mono text-xs text-slate">Email </span>
              <a href="mailto:hello@seoplaner.com" className="font-semibold hover:text-signal">
                hello@seoplaner.com
              </a>
            </p>
            <p>
              <span className="font-mono text-xs text-slate">Phone </span>
              <a href="tel:+10000000000" className="font-semibold hover:text-signal">
                +1 (000) 000-0000
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-paperline bg-white p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
