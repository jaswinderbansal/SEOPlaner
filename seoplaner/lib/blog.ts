export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  readingTime: string;
  tag: string;
  body: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const posts: Post[] = [
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO (Answer Engine Optimization) and Why IT Companies Need It",
    date: "2026-05-12",
    author: "SEOPlaner Team",
    excerpt:
      "Search is splitting into two channels: links you click, and answers you're simply given. Here's how AEO gets your content chosen for the second one.",
    readingTime: "7 min read",
    tag: "AEO",
    body: [
      {
        heading: "The shift from ten blue links to one synthesized answer",
        paragraphs: [
          "Traditional SEO optimized for a ranked list of links. Increasingly, the first thing a searcher sees is a single synthesized answer — an AI Overview, a chat response, a voice assistant reply — built from a handful of sources the model trusts enough to cite.",
          "That shrinks the number of winners per query. If your content isn't structured to be extracted, quoted, and attributed, it can rank on page one and still never appear in the answer that most people actually read.",
        ],
      },
      {
        heading: "What makes content 'answer-ready'",
        paragraphs: [
          "Answer engines favor content that states a claim plainly near the top, backs it with a specific, checkable fact, and organizes supporting detail under clear headings a model can parse without guessing.",
          "This is a formatting and information-architecture problem as much as a writing one: FAQ blocks, definition-style openers, and consistent terminology all raise the odds a passage gets lifted cleanly into an answer.",
        ],
      },
      {
        heading: "Where this fits alongside SEO and GEO",
        paragraphs: [
          "AEO is not a replacement for SEO — it's an additional layer on the same content. Technical SEO still earns you the crawl and the index entry; AEO determines whether what's indexed is usable as a direct answer; GEO extends that further into the training and retrieval behavior of generative engines specifically.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is AEO different from featured snippet optimization?",
        answer:
          "They're related. Featured snippets are Google's older, narrower version of the same idea — one extracted answer shown above the results. AEO covers that plus voice assistants, AI Overviews, and chat-based answer engines, which use broader extraction and citation logic.",
      },
      {
        question: "How long does AEO take to show results?",
        answer:
          "Most clients see early citation gains within 6–10 weeks once content is restructured, since answer engines re-crawl and re-evaluate sources faster than traditional rankings shift. Durable, repeatable citations typically build over 3–6 months.",
      },
    ],
  },
  {
    slug: "geo-generative-engine-optimization-explained",
    title: "GEO Explained: Getting Your Brand Cited by ChatGPT, Perplexity, and Gemini",
    date: "2026-04-02",
    author: "SEOPlaner Team",
    excerpt:
      "Generative Engine Optimization is the practice of making your content the kind of source a language model chooses to cite. Here's what actually moves that needle.",
    readingTime: "8 min read",
    tag: "GEO",
    body: [
      {
        heading: "GEO is about becoming a trusted, checkable source",
        paragraphs: [
          "Generative engines retrieve and cite sources based on a mix of authority signals, structural clarity, and topical consistency across the web — not just a single page's on-page optimization.",
          "That means GEO work often looks like classic authority-building — original data, clear attribution, consistent facts across your site — combined with technical steps that make your content easy for retrieval systems to parse and quote accurately.",
        ],
      },
      {
        heading: "Practical levers that move GEO performance",
        paragraphs: [
          "Publishing original research or data points gives models something specific and attributable to cite, rather than generic claims that are already restated across a dozen competitors.",
          "Keeping facts, numbers, and terminology consistent across your own site and any places you're mentioned elsewhere reduces the ambiguity that makes a model hedge or skip a source entirely.",
          "Explicit schema markup and clean semantic HTML give retrieval systems a structured, low-ambiguity version of your content to work from.",
        ],
      },
      {
        heading: "Measuring what you can't yet see in Search Console",
        paragraphs: [
          "Standard analytics don't show AI citations. Tracking this requires periodic, structured prompt testing across major answer engines to see whether — and how — your brand shows up, then treating that as its own metric alongside rankings and traffic.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you guarantee citations in ChatGPT or Gemini?",
        answer:
          "No ethical agency can guarantee placement inside a third-party model's output — those systems change constantly and citation logic isn't public. What we can do is systematically improve the signals correlated with being cited, and track results transparently.",
      },
      {
        question: "Does GEO replace the need for traditional SEO?",
        answer:
          "No. Generative engines still rely heavily on the same crawled, indexed web that traditional search does. Strong technical and content SEO remains the foundation GEO is built on top of.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist-for-saas",
    title: "The Technical SEO Checklist Every SaaS and IT Company Skips",
    date: "2026-02-18",
    author: "SEOPlaner Team",
    excerpt:
      "Engineering teams ship fast and SEO debt piles up quietly. These are the technical issues we find on almost every audit.",
    readingTime: "6 min read",
    tag: "SEO",
    body: [
      {
        heading: "Rendering and crawlability",
        paragraphs: [
          "Client-side rendered marketing pages are still one of the most common blockers we find, since crawlers can index an empty shell if content depends on JavaScript execution that isn't handled gracefully.",
          "Server-rendered or statically generated marketing pages, like the ones this framework produces by default, remove that entire category of risk.",
        ],
      },
      {
        heading: "Site architecture debt",
        paragraphs: [
          "Docs sites, marketing sites, and blogs often live on different subdomains with inconsistent canonicalization, splitting authority that should be consolidated onto one domain.",
          "Orphaned pages, duplicate parameterized URLs, and inconsistent trailing slashes are small individually but compound into meaningfully wasted crawl budget at scale.",
        ],
      },
      {
        heading: "Core Web Vitals as a ranking and conversion lever",
        paragraphs: [
          "Page experience signals influence both rankings and conversion rate, so treating performance work as purely an engineering concern usually leaves measurable growth on the table.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Next.js help with technical SEO out of the box?",
        answer:
          "It removes several common problems by default — server rendering, automatic code splitting, and built-in metadata and sitemap APIs — but architecture, internal linking, and schema still need to be deliberately designed.",
      },
      {
        question: "How often should a technical SEO audit be repeated?",
        answer:
          "Quarterly for fast-shipping product companies is a reasonable baseline, with an additional audit after any major redesign, migration, or framework change.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
