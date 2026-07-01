"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form backend / email service of choice
    // (e.g. Resend, Formspree, a custom API route at app/api/contact/route.ts).
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cited/30 bg-cited/5 p-8">
        <h3 className="font-display text-xl font-bold text-ink">Thanks — message sent.</h3>
        <p className="mt-2 font-body text-sm text-slate">
          We'll reply within one business day with next steps for your audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs text-slate">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-paperline bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-signal"
          />
        </div>
        <div>
          <label htmlFor="company" className="font-mono text-xs text-slate">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-lg border border-paperline bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-signal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs text-slate">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-paperline bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-signal"
        />
      </div>

      <div>
        <label htmlFor="website" className="font-mono text-xs text-slate">
          Website URL
        </label>
        <input
          id="website"
          name="website"
          type="text"
          placeholder="https://"
          className="mt-1 w-full rounded-lg border border-paperline bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-signal"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs text-slate">
          What are you trying to improve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-paperline bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-signal"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-7 py-4 font-body text-sm font-semibold text-paper transition hover:bg-signal sm:w-auto"
      >
        Request your free audit
      </button>
    </form>
  );
}
