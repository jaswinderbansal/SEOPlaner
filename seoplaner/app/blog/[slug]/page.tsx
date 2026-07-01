import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "SEOPlaner" },
    mainEntityOfPage: `https://www.seoplaner.com/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <section className="border-b border-paperline bg-paper py-16 md:py-24">
          <Container className="max-w-3xl">
            <span className="font-mono text-xs font-semibold text-cited">{post.tag}</span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 font-mono text-xs text-slate">
              {post.author} ·{" "}
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}{" "}
              · {post.readingTime}
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container className="max-w-3xl space-y-10">
            {post.body.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="font-body text-base leading-relaxed text-slate">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>
      </article>

      <FAQ items={post.faqs} title="Questions this raises" />

      <section className="border-t border-paperline py-12">
        <Container>
          <Link href="/blog" className="font-body text-sm font-semibold text-signal">
            ← Back to all articles
          </Link>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
