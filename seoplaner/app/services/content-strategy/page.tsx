import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Strategy for IT & Software Companies",
  description:
    "Editorial roadmaps built around real search and prompt intent, produced with subject-matter experts — content strategy for SEO, AEO, and GEO.",
  alternates: { canonical: "/services/content-strategy" },
};

export default function ContentStrategyPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "04 — Content Strategy",
        title: "One content roadmap, three optimization layers.",
        intro:
          "Every piece we plan is scored against search demand, prompt-answer potential, and business relevance, so your team never ships content that serves none of the three.",
        serviceName: "Content Strategy",
        serviceDescription:
          "Editorial roadmaps and content production mapped to search and AI-prompt intent for IT and software companies.",
        pillars: [
          {
            title: "Intent research",
            detail: "Mapping real search queries and AI prompts your buyers use, not assumed keyword lists.",
          },
          {
            title: "Editorial roadmap",
            detail: "A prioritized publishing calendar scored by traffic potential, citation potential, and sales relevance.",
          },
          {
            title: "Production & governance",
            detail: "Writing, technical review, and a refresh cadence that keeps published content accurate and competitive.",
          },
        ],
        deliverables: [
          "Search and prompt intent research",
          "Prioritized editorial roadmap and calendar",
          "Content briefs mapped to SEO, AEO, and GEO best practices",
          "Written drafts or technical review of in-house drafts",
          "Content refresh and pruning recommendations",
          "Performance reporting tied back to the roadmap",
        ],
        faqs: [
          {
            question: "Can you work with our existing writers?",
            answer:
              "Yes — many clients keep their own writers or subject-matter experts and use us for research, briefs, and technical/SEO review rather than first drafts.",
          },
          {
            question: "How do you avoid generic, AI-sounding content?",
            answer:
              "Briefs are built from real product knowledge and, where possible, direct input from your engineers or subject-matter experts, so published content reflects specific expertise rather than restated generalities.",
          },
        ],
      }}
    />
  );
}
