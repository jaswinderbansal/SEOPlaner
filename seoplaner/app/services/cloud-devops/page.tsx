import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services",
  description:
    "Cloud architecture, migration, and DevOps services — including the infrastructure work that underpins fast, well-ranking sites and apps.",
  alternates: { canonical: "/services/cloud-devops" },
};

export default function CloudDevOpsPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "Cloud & DevOps",
        title: "Infrastructure that keeps everything else fast.",
        intro:
          "Site speed and uptime are ranking factors, not just engineering concerns. We design cloud architecture, CI/CD pipelines, and monitoring that keep your products — and your search rankings — reliable.",
        serviceName: "Cloud & DevOps",
        serviceDescription:
          "Cloud architecture, migration, and DevOps services for IT and software companies, including performance and reliability engineering.",
        pillars: [
          {
            title: "Cloud architecture & migration",
            detail: "Design and migration across AWS, GCP, and Azure, scoped to actual traffic and reliability needs.",
          },
          {
            title: "CI/CD & automation",
            detail: "Deployment pipelines that make shipping fixes to a live site fast enough to matter for AEO/GEO re-crawl cycles.",
          },
          {
            title: "Performance & reliability",
            detail: "CDN configuration, caching strategy, and monitoring aimed squarely at Core Web Vitals and uptime.",
          },
        ],
        deliverables: [
          "Infrastructure and cost audit",
          "Cloud architecture design or migration plan",
          "CI/CD pipeline setup",
          "CDN and caching configuration",
          "Uptime and performance monitoring/alerting",
          "Infrastructure-as-code implementation",
          "Incident response runbooks",
          "Ongoing DevOps retainer support",
        ],
        faqs: [
          {
            question: "How does DevOps work connect to SEO?",
            answer:
              "Page speed, uptime, and how quickly changes go live all factor into both user experience and how favorably search and AI crawlers treat your site — so infrastructure work directly supports ranking goals.",
          },
          {
            question: "Can you work within our existing cloud provider and tooling?",
            answer:
              "Yes — we default to improving what you already have rather than mandating a migration, and only recommend a platform change when the cost-benefit case is clear.",
          },
        ],
      }}
    />
  );
}
