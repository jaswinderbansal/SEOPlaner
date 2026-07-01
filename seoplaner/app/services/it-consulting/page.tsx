import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "IT Consulting & Managed IT Services",
  description:
    "Strategic IT consulting and managed services — technology roadmaps, vendor selection, and day-to-day IT support for growing companies.",
  alternates: { canonical: "/services/it-consulting" },
};

export default function ITConsultingPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "IT Consulting & Managed Services",
        title: "A technology partner, not just a vendor.",
        intro:
          "From technology roadmaps to day-to-day managed support, we help growing companies make deliberate infrastructure and tooling decisions instead of reactive ones.",
        serviceName: "IT Consulting & Managed Services",
        serviceDescription:
          "Strategic IT consulting, technology roadmapping, and managed IT support services for growing companies.",
        pillars: [
          {
            title: "Technology strategy",
            detail: "Roadmaps and vendor evaluations that tie IT decisions back to business goals, not just technical preference.",
          },
          {
            title: "Managed IT support",
            detail: "Day-to-day helpdesk, device management, and systems administration so internal teams can focus on the product.",
          },
          {
            title: "Digital transformation",
            detail: "Modernizing legacy systems and workflows without disrupting the operations that depend on them.",
          },
        ],
        deliverables: [
          "IT infrastructure and systems audit",
          "Technology roadmap and vendor recommendations",
          "Helpdesk and device management",
          "Systems administration and network support",
          "Security and compliance baseline review",
          "Legacy system modernization planning",
          "Budget and licensing optimization",
          "Quarterly strategy reviews",
        ],
        faqs: [
          {
            question: "Is this a replacement for an internal IT team?",
            answer:
              "It can be, for companies without one yet, but most clients use us to augment an existing team — handling overflow, specialized projects, or strategic planning alongside their in-house staff.",
          },
          {
            question: "Do you offer ongoing retainers or only project work?",
            answer:
              "Both — many clients start with a scoped project like an infrastructure audit, then move to an ongoing managed retainer once priorities are clear.",
          },
        ],
      }}
    />
  );
}
