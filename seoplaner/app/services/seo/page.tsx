import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services for IT & Software Companies",
  description:
    "Technical SEO, on-page optimization, and content built to earn durable Google rankings for IT, SaaS, and software companies.",
  alternates: { canonical: "/services/seo" },
};

export default function SEOPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "01 — Search Engine Optimization",
        title: "SEO built on a technical foundation, not guesswork.",
        intro:
          "We start under the hood — crawlability, rendering, and architecture — because content can't rank if it isn't reliably indexed. Then we build the content and links that earn the position.",
        serviceName: "Search Engine Optimization",
        serviceDescription:
          "Technical SEO, content optimization, and link earning for IT and software companies, focused on durable organic rankings.",
        pillars: [
          {
            title: "Technical SEO",
            detail: "Crawlability, Core Web Vitals, structured data, canonicalization, and site architecture audits.",
          },
          {
            title: "On-page & content",
            detail: "Search-intent-mapped pages, internal linking, and content refreshes for pages losing rank.",
          },
          {
            title: "Authority building",
            detail: "Digital PR and earned links from publications your buyers and AI models both trust.",
          },
        ],
        deliverables: [
          "Full technical SEO audit with prioritized fix list",
          "Keyword and search-intent map tied to your product",
          "On-page optimization for priority pages",
          "Internal linking architecture",
          "Schema markup implementation",
          "Monthly rank and traffic reporting",
          "Ongoing content briefs for your writers or ours",
          "Quarterly competitive gap analysis",
        ],
        faqs: [
          {
            question: "How long until we see ranking improvements?",
            answer:
              "Technical fixes and content updates are typically re-crawled within days to a few weeks, with meaningful ranking movement often visible in 6–12 weeks depending on competitiveness.",
          },
          {
            question: "Do you write the content or just advise?",
            answer:
              "Both models work — we can write and ship content directly, or produce detailed briefs for your in-house writers and engineers to execute against.",
          },
          {
            question: "Will you touch our codebase for technical fixes?",
            answer:
              "We can implement fixes directly if given access, or hand your engineering team a prioritized, ticket-ready list — whichever fits how your team works.",
          },
        ],
      }}
    />
  );
}
