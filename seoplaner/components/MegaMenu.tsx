"use client";

import Link from "next/link";

export default function MegaMenu({ open, title }) {
  if (!open) return null;

  const menus = {
    Services: [
      {
        heading: "Search Optimization",
        items: [
          { label: "SEO", href: "/services/seo" },
          { label: "Technical SEO", href: "/services/technical-seo" },
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "Ecommerce SEO", href: "/services/ecommerce-seo" },
        ],
      },
      {
        heading: "AI Search",
        items: [
          { label: "AEO", href: "/services/aeo" },
          { label: "GEO", href: "/services/geo" },
          { label: "AI Visibility", href: "/services/ai-search" },
          { label: "Content Strategy", href: "/services/content-marketing" },
        ],
      },
      {
        heading: "Development",
        items: [
          { label: "Web Development", href: "/services/web-development" },
          { label: "Software Development", href: "/services/software-development" },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
          { label: "Cybersecurity", href: "/services/cybersecurity" },
        ],
      },
    ],

    Industries: [
      {
        heading: "Industries",
        items: [
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Real Estate", href: "/industries/real-estate" },
          { label: "Legal", href: "/industries/legal" },
          { label: "Finance", href: "/industries/finance" },
          { label: "Education", href: "/industries/education" },
          { label: "SaaS", href: "/industries/saas" },
        ],
      },
    ],

    Company: [
      {
        heading: "Company",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  };

  const data = menus[title];
  if (!data) return null;

  return (
    <div className="absolute left-1/2 top-full z-50 mt-6 w-[900px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
      <div className={`grid gap-10 ${data.length === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
        {data.map((group) => (
          <div key={group.heading}>
            <h3 className="mb-5 text-lg font-bold text-slate-900">
              {group.heading}
            </h3>

            <div className="space-y-3">
              {group.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-green-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
