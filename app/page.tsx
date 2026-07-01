import Link from "next/link";

const services = [
  ["Local SEO services", "Be the business nearby customers find first.", "/local-seo-services", "01"],
  ["Link building services", "Earn relevant links that strengthen rankings and trust.", "/link-building-services", "02"],
  ["SEO company in India", "A focused SEO team for ambitious, sustainable growth.", "/seo-company-india", "03"],
];

export default function Home() {
  return <>
    <section className="hero home-hero">
      <div className="eyebrow">Search growth, thoughtfully planned</div>
      <h1>SEO that turns<br /><em>attention</em> into action.</h1>
      <p className="hero-copy">Strategy, content, authority, and technical craft—brought together in one clear plan.</p>
      <div className="hero-actions"><a className="button" href="mailto:hello@seoplaner.com">Plan my growth <span>↗</span></a><a className="text-link" href="#services">Explore services ↓</a></div>
      <div className="orbit" aria-hidden="true"><span>SEO</span></div>
    </section>
    <section className="services" id="services">
      <div className="section-kicker">What we do</div>
      <div className="service-grid">{services.map(([title, text, href, no]) => <Link href={href} className="service-card" key={href}><b>{no}</b><h2>{title}</h2><p>{text}</p><span>Explore service →</span></Link>)}</div>
    </section>
    <section className="statement"><p>Not more traffic.</p><h2>The <em>right</em> traffic, arriving with intent.</h2></section>
  </>;
}
