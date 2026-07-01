import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Development Services for IT & Software Companies",
  description:
    "Fast, accessible, SEO-ready websites and web apps built on modern frameworks — designed to rank well and convert from day one.",
  alternates: { canonical: "/services/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      data={{
        eyebrow: "Web Development",
        title: "Websites built to rank, not just to launch.",
        intro:
          "We design and build marketing sites, web apps, and customer portals on fast, server-rendered frameworks — so the SEO, AEO, and GEO foundations are baked in from the first commit, not retrofitted later.",
        serviceName: "Web Development",
        serviceDescription:
          "Custom website and web application development on modern, SEO-ready frameworks for IT and software companies.",
        pillars: [
          {
            title: "Marketing & product sites",
            detail: "Server-rendered builds on Next.js and similar frameworks, optimized for speed and crawlability from launch.",
          },
          {
            title: "Web applications",
            detail: "Customer portals, dashboards, and internal tools built on a maintainable, well-documented codebase.",
          },
          {
            title: "Design systems",
            detail: "Reusable component libraries so new pages ship fast without drifting from brand or accessibility standards.",
          },
        ],
        deliverables: [
          "UX and information architecture aligned to search intent",
          "Server-rendered or statically generated front end",
          "Component-based design system",
          "Core Web Vitals and accessibility (WCAG) pass",
          "CMS or headless CMS integration",
          "Analytics, tag management, and conversion tracking setup",
          "Staging, QA, and deployment pipeline",
          "Post-launch performance and uptime monitoring",
        ],
        faqs: [
          {
            question: "Do you build on Next.js specifically?",
            answer:
              "Next.js is our default recommendation for marketing and content-heavy sites because of its built-in SEO tooling, but we also build on other frameworks depending on your team's stack and hosting requirements.",
          },
          {
            question: "Can you take over an existing site instead of a full rebuild?",
            answer:
              "Yes — we regularly audit existing codebases and take over incremental improvements rather than a ground-up rebuild, especially when the underlying architecture is sound.",
          },
        ],
      }}
    />
  );
}
