"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-slate-950 text-white">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8 text-sm">
            <span>🚀 AI Search • SEO • GEO • AEO Experts</span>
            <span>⭐ Trusted by Businesses Worldwide</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={15} />
              hello@jaseir.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={15} />
              +91 99141 37278
            </div>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-xl" : "bg-white/95 backdrop-blur border-b border-slate-200"}`}>
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Jaseir Digital"
              width={190}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

<nav className="hidden lg:flex items-center gap-8 font-semibold text-[16px] text-slate-700">
            <div
              className="relative"
              onMouseEnter={() => setMegaMenu("Services")}
              onMouseLeave={() => setMegaMenu("")}
            >
              <button className="flex items-center gap-1 hover:text-green-600">
                Services <ChevronDown size={17}/>
              </button>
              <MegaMenu open={megaMenu==="Services"} title="Services"/>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setMegaMenu("Industries")}
              onMouseLeave={() => setMegaMenu("")}
            >
              <button className="flex items-center gap-1 hover:text-green-600">
                Industries <ChevronDown size={17}/>
              </button>
              <MegaMenu open={megaMenu==="Industries"} title="Industries"/>
            </div>

            <Link href="/case-studies" className="hover:text-green-600">Case Studies</Link>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>

            <div
              className="relative"
              onMouseEnter={() => setMegaMenu("Company")}
              onMouseLeave={() => setMegaMenu("")}
            >
              <button className="flex items-center gap-1 hover:text-green-600">
                Company <ChevronDown size={17}/>
              </button>
              <MegaMenu open={megaMenu==="Company"} title="Company"/>
            </div>

            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:border-green-600 hover:text-green-600 transition">
              Free Audit
            </Link>

            <Link href="/contact" className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-3 font-semibold text-white shadow-lg hover:scale-105 transition">
              Get Proposal
            </Link>
          </div>

          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={32}/> : <Menu size={32}/>}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t bg-white">
            <div className="flex flex-col p-6 space-y-5">
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">Company</Link>
              <Link href="/contact">Contact</Link>
              <Link
                href="/contact"
                className="rounded-xl bg-green-600 py-3 text-center text-white font-semibold"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
