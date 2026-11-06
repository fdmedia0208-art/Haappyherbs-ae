"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CinemaVideo from "./CinemaVideo";
import { Flourish, LeafSprig } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1];
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease, delay },
});

export default function Hero() {
  const scrollToInvite = (e) => {
    e.preventDefault();
    const el = document.getElementById("invitation");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", "#invitation");
  };

  return (
    <section
      id="launch"
      aria-label="Haappy Herbs Grand Launch"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ivory md:justify-center lg:block lg:h-[100svh] lg:min-h-[640px] lg:bg-forest-deep"
    >
      {/* Mobile botanical corners */}
      <LeafSprig
        className="sway pointer-events-none absolute -left-6 -top-8 w-28 rotate-[150deg] opacity-80 lg:hidden"
        style={{ "--origin": "50% 0%" }}
      />
      <LeafSprig
        tone="gold"
        className="sway-slow pointer-events-none absolute -right-8 top-[38%] w-24 -scale-x-100 opacity-60 lg:hidden"
        style={{ "--origin": "100% 100%" }}
      />

      {/* Mobile wordmark */}
      <motion.header
        {...rise(0.1)}
        className="relative z-10 px-5 pt-[max(env(safe-area-inset-top),22px)] text-center lg:hidden"
      >
        <p className="gold-text font-wordmark text-[26px] font-semibold leading-none tracking-[0.14em]">
          HAAPPY HERBS
        </p>
        <p className="eyebrow mt-2 text-[9px] text-gold-deep">Beautiful Naturally</p>
      </motion.header>

      {/* Video: arch frame on mobile, full-bleed cinema on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="relative z-0 mx-auto mt-5 w-[min(76vw,40svh,400px)] lg:absolute lg:inset-0 lg:mt-0 lg:w-auto"
      >
        <div className="arch gold-ring relative aspect-[5/6] overflow-hidden bg-forest lg:aspect-auto lg:h-full lg:rounded-none lg:shadow-none">
          <CinemaVideo
            src="/media/hero.mp4"
            poster="/media/hero-poster.jpg"
            label="Haappy Herbs brand film featuring Shrutika Arjun"
            eager
            className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
            soundButtonClassName="bottom-4 right-4 lg:bottom-8 lg:right-8"
          />
          {/* Desktop overlays for legibility */}
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(9,26,15,0.9)_0%,rgba(9,26,15,0.72)_30%,rgba(9,26,15,0.25)_56%,rgba(9,26,15,0)_72%)] lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-[rgba(9,26,15,0.85)] to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-32 bg-gradient-to-b from-[rgba(9,26,15,0.55)] to-transparent lg:block" />
          {/* Mobile soft bottom shade so the frame feels finished */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(9,26,15,0.35)] to-transparent lg:hidden" />
        </div>
      </motion.div>

      {/* Desktop inset gold frame */}
      <div className="pointer-events-none absolute inset-6 z-10 hidden border border-gold-light/35 lg:block" />
      <div className="pointer-events-none absolute inset-[30px] z-10 hidden border border-gold-light/15 lg:block" />

      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-6 md:flex-none pb-[max(env(safe-area-inset-bottom),28px)] pt-7 text-center lg:absolute lg:inset-y-0 lg:left-0 lg:w-[min(52vw,720px)] lg:items-start lg:justify-center lg:px-0 lg:pb-0 lg:pl-[clamp(56px,7vw,120px)] lg:pt-0 lg:text-left">
        <motion.div {...rise(0.25)} className="hidden lg:block">
          <p className="gold-text font-wordmark text-[clamp(30px,2.6vw,44px)] font-semibold leading-none tracking-[0.14em]">
            HAAPPY HERBS
          </p>
          <p className="eyebrow mt-3 text-[11px] text-gold-light/90">Beautiful Naturally</p>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.6 }}
            className="mt-7 block h-px w-40 origin-left bg-gradient-to-r from-gold-light to-transparent"
          />
        </motion.div>

        <motion.h1
          {...rise(0.4)}
          className="font-display text-[clamp(46px,13vw,64px)] md:text-[84px] font-medium uppercase leading-[0.9] tracking-[0.02em] text-forest lg:mt-8 lg:text-[clamp(64px,6.4vw,112px)] lg:text-ivory"
        >
          Grand <span className="lg:block">Launch</span>
        </motion.h1>

        <motion.p
          {...rise(0.55)}
          className="mt-3 font-display text-[22px] italic text-maroon lg:mt-4 lg:text-[clamp(26px,2.1vw,34px)] lg:text-gold-light"
        >
          A Special Invitation
        </motion.p>

        <motion.div {...rise(0.6)} className="my-4 lg:hidden">
          <Flourish width={150} />
        </motion.div>

        <motion.p
          {...rise(0.7)}
          className="max-w-[30ch] font-display text-[17px] leading-snug text-ink/80 lg:mt-6 lg:max-w-[34ch] lg:text-[clamp(19px,1.45vw,23px)] lg:text-ivory/85"
        >
          Join us in celebrating the beginning of a beautiful journey into natural beauty and
          Ayurvedic skincare.
        </motion.p>

        <motion.div {...rise(0.85)} className="mt-6 lg:mt-9">
          <p className="eyebrow text-[10px] text-gold-deep lg:text-[11px] lg:text-gold-light/90">
            Join with our Emerging Founder
          </p>
          <p className="mt-1.5 font-display text-[34px] font-medium italic leading-none text-forest lg:text-[clamp(38px,3.2vw,54px)] lg:text-ivory">
            Shrutika Arjun
          </p>
        </motion.div>

        <motion.dl
          {...rise(1)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-forest lg:mt-9 lg:justify-start lg:gap-x-6 lg:text-ivory"
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <dt className="sr-only">Date</dt>
            <dd className="eyebrow text-[11px] tracking-[0.24em] lg:text-[13px]">15 November 2026</dd>
            <span aria-hidden className="h-3.5 w-px bg-gold" />
            <dt className="sr-only">Time</dt>
            <dd className="eyebrow text-[11px] tracking-[0.24em] lg:text-[13px]">4:00 PM</dd>
          </div>
          <div className="w-full">
            <dt className="sr-only">Venue</dt>
            <dd className="eyebrow mt-1 text-[11px] tracking-[0.24em] text-gold-deep lg:mt-2 lg:text-[13px] lg:text-gold-light">
              BurJuman Mall, Dubai
            </dd>
          </div>
        </motion.dl>

        <motion.a
          {...rise(1.15)}
          href="#invitation"
          onClick={scrollToInvite}
          className="group relative mt-8 inline-flex min-h-[52px] items-center gap-3 overflow-hidden rounded-full border border-gold px-8 text-forest transition-colors duration-500 hover:text-ivory lg:mt-11 lg:border-gold-light/80 lg:text-ivory lg:hover:text-forest-deep"
        >
          <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-forest transition-transform duration-500 ease-[var(--ease-lux)] group-hover:scale-x-100 lg:bg-gold-light" />
          <span className="eyebrow text-[11px] tracking-[0.3em]">Explore the Invitation</span>
          <ChevronDown size={16} strokeWidth={1.6} className="nudge" />
        </motion.a>
      </div>

      {/* Desktop scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold-light/80 lg:flex"
      >
        <span className="eyebrow text-[9px]">Scroll</span>
        <span className="h-10 w-px origin-top animate-pulse bg-gradient-to-b from-gold-light to-transparent" />
      </motion.div>
    </section>
  );
}
