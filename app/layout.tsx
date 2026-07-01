import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seoplaner.com"),
  title: { default: "SEOplaner | SEO That Builds Momentum", template: "%s | SEOplaner" },
  description: "Practical SEO services for local visibility, authority, and sustainable organic growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/"><span>SEO</span>planer<i>.</i></Link>
          <nav aria-label="Main navigation">
            <Link href="/local-seo-services">Local SEO</Link>
            <Link href="/link-building-services">Link Building</Link>
            <Link href="/seo-company-india">SEO India</Link>
          </nav>
          <a className="button button-small" href="mailto:hello@seoplaner.com">Free audit</a>
        </header>
        <main>{children}</main>
        <footer>
          <Link className="brand brand-light" href="/"><span>SEO</span>planer<i>.</i></Link>
          <p>Clear plans. Useful work. Compounding growth.</p>
          <p>© {new Date().getFullYear()} SEOplaner</p>
        </footer>
      </body>
    </html>
  );
}
