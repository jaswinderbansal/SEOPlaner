export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  date: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloudstack-devtools",
    client: "CloudStack DevTools",
    industry: "DevOps SaaS",
    date: "2026-03-01",
    summary:
      "A CI/CD tooling startup went from page-two rankings to owning the top three organic spots for its core keyword set — and started appearing in AI Overviews.",
    challenge:
      "CloudStack had strong product-led growth but thin, engineering-authored docs that ranked nowhere and were never picked up by AI answer engines as a citable source.",
    approach: [
      "Rebuilt information architecture around jobs-to-be-done search intent",
      "Converted documentation into structured, citable answer blocks (AEO)",
      "Added comparison and 'vs' pages targeting generative engine prompts (GEO)",
      "Shipped technical SEO fixes: Core Web Vitals, canonical cleanup, schema markup",
    ],
    results: [
      { label: "Organic sessions", value: "+312%" },
      { label: "Keywords in top 3", value: "48" },
      { label: "AI answer citations tracked", value: "126/mo" },
      { label: "Time to first ranking gains", value: "6 weeks" },
    ],
  },
  {
    slug: "fintrust-payments",
    client: "FinTrust Payments",
    industry: "Fintech Infrastructure",
    date: "2026-01-15",
    summary:
      "A B2B payments API provider needed to compete against category giants without a category-giant budget. A tightly scoped GEO strategy closed the gap.",
    challenge:
      "High-intent developer searches were dominated by two incumbents. FinTrust's content read like marketing copy, not the technical reference material developers — and AI models — actually cite.",
    approach: [
      "Rewrote flagship guides in a structured, source-of-truth format",
      "Built a public API reference optimized for machine parsing and citation",
      "Earned links from developer communities and technical newsletters",
      "Instrumented AI-citation tracking to measure GEO performance monthly",
    ],
    results: [
      { label: "Non-branded organic traffic", value: "+188%" },
      { label: "Developer sign-ups from organic", value: "+96%" },
      { label: "Featured snippets won", value: "22" },
      { label: "Domain authority", value: "+14 pts" },
    ],
  },
  {
    slug: "northlane-msp",
    client: "Northlane MSP",
    industry: "Managed IT Services",
    date: "2025-11-05",
    summary:
      "A regional managed services provider needed to win local + national search simultaneously. A hybrid local SEO and AEO program delivered both.",
    challenge:
      "Northlane ranked well locally but was invisible for the higher-value national keywords their sales team wanted, and had zero presence in AI-generated 'best MSP' style answers.",
    approach: [
      "Local SEO overhaul across Google Business Profiles and location pages",
      "Built a comparison and buyer's-guide content hub for national intent",
      "Structured FAQ and HowTo schema across service pages for AEO",
      "Ongoing digital PR to build the citation footprint AI models draw from",
    ],
    results: [
      { label: "Qualified leads / month", value: "+164%" },
      { label: "Local pack rankings", value: "Top 3 in 9 metros" },
      { label: "National keyword rankings (top 10)", value: "37" },
      { label: "Cost per lead", value: "-41%" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
