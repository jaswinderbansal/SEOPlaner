import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="eyebrow text-signal">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 font-body text-slate">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-ink px-7 py-4 font-body text-sm font-semibold text-paper transition hover:bg-signal"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
