import Link from "next/link";

type Props = { eyebrow: string; title: string; accent: string; intro: string; stats: string[][]; offerings: { title: string; text: string }[]; process: string[][] };

export default function ServicePage({ eyebrow, title, accent, intro, stats, offerings, process }: Props) {
  return <>
    <section className="hero service-hero">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}<br /><em>{accent}</em></h1>
      <p className="hero-copy">{intro}</p>
      <a className="button" href="mailto:hello@seoplaner.com">Get a free strategy call <span>↗</span></a>
    </section>
    <section className="stats">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="offerings"><div><div className="section-kicker">Built for progress</div><h2>A complete system,<br />not a bag of tricks.</h2></div><div className="offering-list">{offerings.map((item, i) => <article key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
    <section className="process"><div className="section-kicker">How we work</div><h2>Simple on purpose.</h2><div className="process-grid">{process.map(([title, text], i) => <div key={title}><b>{i + 1}</b><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="cta"><span>Ready when you are</span><h2>Let’s make search your<br />strongest growth channel.</h2><a className="button button-light" href="mailto:hello@seoplaner.com">Start the conversation ↗</a><Link href="/">Back to home</Link></section>
  </>;
}
