import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "GEO Services — Generative Engine Optimization",
  description:
    "Become a source ChatGPT, Perplexity, and Gemini choose to cite. Generative Engine Optimization services for IT and software companies.",
  alternates: { canonical: "/services/geo" },
};

export default function GEOPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "03 — Generative Engine Optimization",
        title: "Get cited where the research happens now.",
        intro:
          "Buyers increasingly ask ChatGPT, Perplexity, and Gemini before they ask Google. GEO builds the authority, structure, and original data that make those models choose your brand as a source.",
        serviceName: "Generative Engine Optimization",
        serviceDescription:
          "Authority building, structured content, and citation tracking to improve brand visibility inside generative AI answer engines.",
        pillars: [
          {
            title: "Original, citable data",
            detail: "Producing research and benchmarks generic competitor content can't offer a model to cite instead.",
          },
          {
            title: "Cross-web consistency",
            detail: "Aligning facts, terminology, and positioning across your site and third-party mentions to reduce model hedging.",
          },
          {
            title: "Machine-readable structure",
            detail: "Clean semantic HTML and schema that give retrieval systems an unambiguous version of your content.",
          },
        ],
        deliverables: [
          "GEO readiness audit across your content library",
          "Original research or data-asset production",
          "Cross-web fact and terminology consistency review",
          "Structured data and semantic HTML implementation",
          "Monthly prompt-testing citation reports across major engines",
          "Digital PR aimed at sources generative models draw from",
        ],
        faqs: [
          {
            question: "How is GEO different from AEO?",
            answer:
              "AEO focuses on winning discrete answer surfaces like featured snippets and AI Overviews within search engines. GEO is broader, aimed at generative engines and chat assistants that synthesize answers from training and retrieval across the open web.",
          },
          {
            question: "How do you measure GEO results if there's no 'GEO Console'?",
            answer:
              "We run structured, repeatable prompt tests across ChatGPT, Perplexity, Gemini, and other engines each month and track whether and how your brand is cited, alongside standard traffic and ranking metrics.",
          },
        ],
      }}
    />
  );
}
