import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Custom software, SaaS platforms, and API development for IT companies — from product scoping through to production support.",
  alternates: { canonical: "/services/software-development" },
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "Software Development",
        title: "Custom software, shipped and supported.",
        intro:
          "From new SaaS products to internal tools and API platforms, we scope, build, and support custom software with the same rigor we bring to public-facing sites — including making sure your product's documentation is itself discoverable.",
        serviceName: "Software Development",
        serviceDescription:
          "Custom software, SaaS, and API development and ongoing support for IT and technology companies.",
        pillars: [
          {
            title: "Product engineering",
            detail: "New SaaS products and features built with a small, senior team rather than a rotating bench.",
          },
          {
            title: "APIs & integrations",
            detail: "Well-documented API design and third-party integrations, built to be both usable and discoverable.",
          },
          {
            title: "Ongoing support",
            detail: "Bug fixes, performance work, and roadmap-driven feature development after initial launch.",
          },
        ],
        deliverables: [
          "Technical discovery and scoping",
          "Architecture and stack recommendation",
          "Sprint-based development with regular demos",
          "API design and developer documentation",
          "Automated testing and CI/CD pipeline",
          "Production monitoring and incident support",
          "Code review and technical debt audits",
          "Long-term maintenance retainer options",
        ],
        faqs: [
          {
            question: "Do you work with our existing engineering team?",
            answer:
              "Yes — we frequently embed alongside in-house teams for specific initiatives rather than replacing them, and we also take on fully outsourced builds when that's the better fit.",
          },
          {
            question: "What stacks do you work in?",
            answer:
              "Most commonly TypeScript/Node, React and Next.js, Python, and standard cloud-native infrastructure — but stack choice is driven by your existing systems and team, not a fixed template.",
          },
        ],
      }}
    />
  );
}
