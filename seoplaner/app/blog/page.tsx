import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SEO, AEO, and GEO for IT and software companies — from technical SEO checklists to how generative engines choose citations.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-paperline bg-paper py-16 md:py-24">
        <Container>
          <p className="eyebrow text-signal">Blog</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            Notes on search, answers, and generative visibility.
          </h1>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-paperline bg-white p-7 transition hover:border-signal hover:shadow-lg"
            >
              <span className="font-mono text-xs font-semibold text-cited">{p.tag}</span>
              <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 font-body text-sm text-slate">{p.excerpt}</p>
              <p className="mt-4 border-t border-paperline pt-4 font-mono text-[11px] text-slate">
                {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                {" · "}
                {p.readingTime}
              </p>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
