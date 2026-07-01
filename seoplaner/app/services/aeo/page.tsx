import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AEO Services — Answer Engine Optimization",
  description:
    "Get selected as the direct answer in AI Overviews, featured snippets, and voice assistants. AEO services for IT and software companies.",
  alternates: { canonical: "/services/aeo" },
};

export default function AEOPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "02 — Answer Engine Optimization",
        title: "Be the answer, not just a result.",
        intro:
          "More searches end without a click. AEO restructures your highest-intent content so answer engines can extract, trust, and attribute it — putting you in front of searchers who never scroll past the answer.",
        serviceName: "Answer Engine Optimization",
        serviceDescription:
          "Content structuring and schema implementation to win AI Overviews, featured snippets, and voice assistant answers.",
        pillars: [
          {
            title: "Answer-first structure",
            detail: "Rewriting key pages so claims are stated plainly and backed by checkable specifics near the top.",
          },
          {
            title: "Structured data",
            detail: "FAQ, HowTo, and Article schema that make your content unambiguous to parse and cite.",
          },
          {
            title: "Citation tracking",
            detail: "Recurring prompt testing across major answer engines to measure whether you're actually being surfaced.",
          },
        ],
        deliverables: [
          "Answer-readiness audit of your top-traffic pages",
          "Rewrites structured for extraction and citation",
          "FAQ and HowTo schema implementation",
          "Voice-search and long-tail question mapping",
          "Monthly AI Overview / snippet visibility tracking",
          "Competitive answer-share analysis",
        ],
        faqs: [
          {
            question: "Can you guarantee we'll appear in AI Overviews?",
            answer:
              "No one can guarantee placement in a system Google doesn't publish rules for. We can systematically improve the structural and authority signals correlated with being selected, and track results honestly.",
          },
          {
            question: "Does AEO require rewriting all our content?",
            answer:
              "No — we prioritize pages already ranking well or targeting high-intent questions, since those have the best odds of conversion into direct answers with the least rework.",
          },
        ],
      }}
    />
  );
}
