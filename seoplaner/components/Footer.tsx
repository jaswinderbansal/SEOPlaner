import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-10 lg:flex-row lg:p-14">
            <div>
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
                FREE CONSULTATION
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Ready to Dominate Search?
              </h2>

              <p className="mt-3 max-w-xl text-green-50">
                Get a free SEO & AI Search audit with actionable insights to
                increase rankings, traffic, and qualified leads.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:scale-105">
              Get Free Audit
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-xl font-bold">
              J
            </div>

            <div>
              <h2 className="text-2xl font-bold">Jaseir</h2>
              <p className="text-sm uppercase tracking-[3px] text-slate-400">
                Digital
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-400">
            We help businesses dominate Google Search, AI Search, GEO, AEO,
            Local SEO and emerging search platforms with measurable,
            data-driven strategies.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="rounded-full border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="rounded-full border border-slate-700 p-3 transition hover:border-green-500 hover:bg-green-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-lg font-semibold">Services</h3>

          <div className="space-y-4 text-slate-400">
            <Link href="/">SEO</Link>
            <Link href="/">AI Search</Link>
            <Link href="/">GEO</Link>
            <Link href="/">AEO</Link>
            <Link href="/">Technical SEO</Link>
            <Link href="/">Local SEO</Link>
            <Link href="/">Content Marketing</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-6 text-lg font-semibold">Company</h3>

          <div className="space-y-4 text-slate-400">
            <Link href="/">About</Link>
            <Link href="/">Case Studies</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Careers</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-semibold">Contact</h3>

          <div className="space-y-5 text-slate-400">
            <div className="flex gap-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex gap-3">
              <Mail size={18} />
              <span>hello@jaseir.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} />
              <span>
                Chandigarh, India
                <br />
                Serving Clients Worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row">
          <p>© 2026 Jaseir Digital. All Rights Reserved.</p>

          <div className="flex gap-8">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}