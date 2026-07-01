import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Cybersecurity Services for IT & Software Companies",
  description:
    "Security audits, penetration testing, and compliance support for IT and software companies — protecting the systems your growth depends on.",
  alternates: { canonical: "/services/cybersecurity" },
};

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "Cybersecurity",
        title: "Protect the systems your growth depends on.",
        intro:
          "A security incident can undo months of ranking and reputation work overnight. We audit, harden, and monitor the systems behind your website, product, and internal tools.",
        serviceName: "Cybersecurity",
        serviceDescription:
          "Security audits, penetration testing, and compliance support for IT and software companies.",
        pillars: [
          {
            title: "Security audits",
            detail: "Application, infrastructure, and process reviews that surface real risk, ranked by likelihood and impact.",
          },
          {
            title: "Penetration testing",
            detail: "Manual and automated testing against web apps, APIs, and infrastructure before attackers find the gaps.",
          },
          {
            title: "Compliance support",
            detail: "Guidance toward SOC 2, ISO 27001, and similar frameworks that also build buyer and partner trust.",
          },
        ],
        deliverables: [
          "Application and infrastructure security audit",
          "Penetration testing with a prioritized remediation report",
          "Access control and identity management review",
          "Compliance readiness assessment (SOC 2, ISO 27001, etc.)",
          "Incident response planning",
          "Security awareness training for staff",
          "Ongoing vulnerability monitoring",
          "Vendor and third-party risk review",
        ],
        faqs: [
          {
            question: "Do you handle compliance certification directly?",
            answer:
              "We prepare you for the audit — closing gaps, documenting controls, and coordinating with your auditor of choice — rather than issuing the certification ourselves.",
          },
          {
            question: "How often should penetration testing happen?",
            answer:
              "Annually at minimum for most companies, with additional testing after major architecture changes or before entering markets with stricter compliance requirements.",
          },
        ],
      }}
    />
  );
}
