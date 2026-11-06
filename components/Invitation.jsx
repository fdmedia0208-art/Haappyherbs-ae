"use client";

import { motion } from "framer-motion";
import { CalendarDays, CalendarPlus, Clock, MapPin, Navigation } from "lucide-react";
import CinemaVideo from "./CinemaVideo";
import { Corner, Flourish, LeafSprig, Lotus } from "./Ornaments";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 26, className = "", as = "div" }) {
  const M = motion[as];
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, ease, delay }}
      className={className}
    >
      {children}
    </M>
  );
}

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=BurJuman+Mall%2C+Dubai%2C+UAE";

const CDN = "https://cdn.shopify.com/s/files/1/0664/1319/9592/files/";
const products = [
  {
    name: "Ujvala",
    line: "Skin Brightening Moisturizer",
    img: CDN + "ujvala-3.jpg?v=1775104848",
  },
  {
    name: "Kumkumadi",
    line: "Flawless Beauty Day & Night Cream",
    img: CDN + "KumkumadiCream-8.jpg?v=1774851711",
  },
  {
    name: "Turmeric",
    line: "Night Repair Cream",
    img: CDN + "turmericcream-2.jpg?v=1764674933",
  },
  {
    name: "Carrot Therapy",
    line: "Multi Correct Cream",
    img: CDN + "3_e68f0f78-4a3d-4362-8ff9-096e3e6efcf4.png?v=1765431136",
  },
];

function VideoFrame({ src, poster, label, caption, delay = 0, className = "" }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, clipPath: "inset(12% 0% 0% 0% round 999px 999px 24px 24px)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 999px 999px 24px 24px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease, delay }}
      className={"relative " + className}
    >
      <div className="gold-frame relative aspect-[9/16] w-full overflow-hidden rounded-[999px_999px_24px_24px] bg-forest">
        <CinemaVideo
          src={src}
          poster={poster}
          label={label}
          className="absolute inset-0 h-full w-full object-cover"
          soundButtonClassName="bottom-3 right-3 h-9 w-9 lg:bottom-4 lg:right-4 lg:h-10 lg:w-10"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center font-display text-[15px] italic leading-tight text-moss lg:mt-5 lg:text-[17px]">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold-deep">
        <Icon size={18} strokeWidth={1.4} />
      </span>
      <dt className="eyebrow mt-3 text-[9.5px] text-gold-deep">{label}</dt>
      <dd className="mt-1.5 font-display text-[19px] leading-snug text-forest lg:text-[21px]">
        {children}
      </dd>
    </div>
  );
}

export default function Invitation() {
  return (
    <section
      id="invitation"
      aria-label="The invitation"
      className="relative isolate overflow-hidden bg-ivory-deep pb-16 pt-16 lg:pb-28 lg:pt-28"
    >
      {/* Ambient botanicals */}
      <LeafSprig className="sway-slow pointer-events-none absolute -left-10 top-10 w-40 opacity-50 lg:w-56" style={{ "--origin": "0% 100%" }} />
      <LeafSprig tone="gold" className="sway pointer-events-none absolute -right-10 top-[30%] w-36 -scale-x-100 opacity-40 lg:w-48" style={{ "--origin": "100% 100%" }} />
      <LeafSprig className="sway pointer-events-none absolute -left-8 bottom-40 hidden w-44 rotate-[200deg] opacity-40 lg:block" style={{ "--origin": "50% 0%" }} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.7),transparent_70%)]" />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
        {/* Section mark */}
        <Reveal className="flex flex-col items-center text-center">
          <Lotus className="w-12" />
          <p className="eyebrow mt-4 text-[10px] text-gold-deep lg:text-[11px]">The Exclusive Invitation</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 [grid-template-areas:'card_card'_'v1_v2'] sm:gap-x-6 lg:mt-14 lg:grid-cols-[minmax(0,270px)_minmax(0,620px)_minmax(0,270px)] lg:justify-center lg:gap-x-10 lg:[grid-template-areas:'v1_card_v2'] xl:gap-x-16">
          {/* Portrait video 1 */}
          <div className="[grid-area:v1]">
            <div className="lg:sticky lg:top-[max(8vh,48px)] lg:pt-16">
              <VideoFrame
                src="/media/dubai.mp4"
                poster="/media/dubai-poster.jpg"
                label="Shrutika Arjun at BurJuman Mall, Dubai, as the store takes shape"
                caption="Our Dubai dream, taking shape"
              />
            </div>
          </div>

          {/* Invitation card */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 1.2, ease }}
            className="paper gold-frame relative mx-auto w-full max-w-[620px] rounded-[6px] px-6 pb-12 pt-14 text-center [grid-area:card] sm:px-12 lg:px-14 lg:pb-16 lg:pt-16"
          >
            <Corner className="absolute left-3 top-3 w-10 sm:w-12" />
            <Corner className="absolute right-3 top-3 w-10 -scale-x-100 sm:w-12" />
            <Corner className="absolute bottom-3 left-3 w-10 -scale-y-100 sm:w-12" />
            <Corner className="absolute bottom-3 right-3 w-10 -scale-100 sm:w-12" />

            <Reveal>
              <p className="eyebrow text-[10.5px] leading-relaxed text-gold-deep sm:text-[11.5px]">
                With great joy and excitement,
              </p>
              <p className="mt-4 font-display text-[21px] italic leading-snug text-ink/80 sm:text-[23px]">
                We warmly invite you to the Grand Launch of
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <h2 className="gold-text font-wordmark text-[clamp(32px,9.5vw,52px)] font-semibold leading-none tracking-[0.1em]">
                HAAPPY HERBS
              </h2>
              <p className="mt-3 font-display text-[clamp(24px,6.6vw,34px)] font-medium italic text-forest">
                Beautiful Naturally!
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-6">
              <p className="mx-auto max-w-[32ch] font-display text-[19px] leading-snug text-ink/75 sm:text-[20px]">
                Join us for a beautiful celebration of natural beauty and Ayurvedic skincare.
              </p>
              <Flourish className="mx-auto mt-8" width={190} />
            </Reveal>

            {/* Special guest */}
            <Reveal delay={0.05} className="mt-10">
              <p className="eyebrow text-[10.5px] text-gold-deep">Join with our Emerging Founder</p>
              <div className="relative mx-auto mt-7 w-[min(62vw,250px)]">
                <motion.div
                  initial={{ opacity: 0, scale: 1.06 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease }}
                  className="arch gold-ring relative aspect-[4/5] overflow-hidden bg-parchment"
                >
                  <img
                    src="/images/shruthika-portrait.webp"
                    alt="Shrutika Arjun in a yellow silk saree, smiling"
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease, delay: 0.35 }}
                  className="absolute -bottom-6 -right-10 w-[38%] overflow-hidden rounded-full border-[3px] border-ivory shadow-[0_0_0_1px_#b8893b,0_18px_30px_-16px_rgba(11,34,20,0.6)] sm:-right-14"
                >
                  <img
                    src="/images/shruthika-saree.webp"
                    alt=""
                    width={500}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover object-[50%_10%]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease, delay: 0.5 }}
                  className="absolute -bottom-3 -left-10 w-[32%] overflow-hidden rounded-full border-[3px] border-ivory shadow-[0_0_0_1px_#b8893b,0_18px_30px_-16px_rgba(11,34,20,0.6)] sm:-left-14"
                >
                  <img
                    src="/images/shruthika-rangoli.webp"
                    alt=""
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover object-[60%_10%]"
                  />
                </motion.div>
              </div>
              <p className="mt-12 font-display text-[clamp(40px,11vw,56px)] font-medium italic leading-none text-forest">
                Shrutika Arjun
              </p>
            </Reveal>

            <Flourish className="mx-auto mt-10" width={190} />

            {/* Event details */}
            <Reveal className="mt-9">
              <p className="eyebrow text-[10.5px] text-gold-deep">Event Details</p>
              <dl className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-4">
                <Detail icon={CalendarDays} label="Date">
                  15 November 2026
                </Detail>
                <Detail icon={Clock} label="Time">
                  4:00 PM
                </Detail>
                <Detail icon={MapPin} label="Venue">
                  BurJuman Mall
                  <span className="block text-[16px] text-ink/70 lg:text-[17px]">
                    2nd Floor, Lobby E
                    <br />
                    Dubai, UAE
                  </span>
                </Detail>
              </dl>
            </Reveal>

            {/* CTAs */}
            <Reveal className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-gold bg-forest px-7 text-ivory shadow-[0_14px_30px_-18px_rgba(11,34,20,0.9)] transition duration-500 hover:-translate-y-0.5 hover:bg-forest-deep"
              >
                <Navigation size={15} strokeWidth={1.6} className="text-gold-light transition group-hover:rotate-12" />
                <span className="eyebrow whitespace-nowrap text-[11px] tracking-[0.26em]">Get Directions</span>
              </a>
              <a
                href="/haappy-herbs-grand-launch.ics"
                download="haappy-herbs-grand-launch.ics"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-gold px-7 text-forest transition duration-500 hover:-translate-y-0.5 hover:bg-gold-light/30"
              >
                <CalendarPlus size={15} strokeWidth={1.6} className="text-gold-deep" />
                <span className="eyebrow whitespace-nowrap text-[11px] tracking-[0.26em]">Add to Calendar</span>
              </a>
            </Reveal>
          </motion.article>

          {/* Portrait video 2 */}
          <div className="[grid-area:v2]">
            <div className="lg:sticky lg:top-[max(8vh,48px)] lg:pt-48">
              <VideoFrame
                src="/media/diwali.mp4"
                poster="/media/diwali-poster.jpg"
                label="Shrutika Arjun presents an exclusive silk saree collection"
                caption="Drape yourself in exclusivity"
                delay={0.15}
              />
            </div>
          </div>
        </div>

        {/* Launch collection */}
        <div className="mx-auto mt-20 max-w-[1040px] lg:mt-28">
          <Reveal className="text-center">
            <p className="eyebrow text-[10px] text-gold-deep lg:text-[11px]">Unveiling at the Launch</p>
            <h3 className="mt-3 font-display text-[clamp(30px,7vw,44px)] font-medium italic text-forest">
              The Ayurvedic Collection
            </h3>
          </Reveal>
          <ul className="mt-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:mt-12 lg:grid-cols-4 lg:gap-x-8">
            {products.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 0.08} className="group text-center">
                <div className="gold-frame overflow-hidden rounded-[999px_999px_10px_10px] bg-parchment">
                  <img
                    src={`${p.img}&width=640`}
                    alt={`Haappy Herbs ${p.name} ${p.line}`}
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover transition duration-[1.6s] ease-[var(--ease-lux)] group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-4 font-wordmark text-[13px] font-semibold tracking-[0.16em] text-forest sm:text-[14px]">
                  {p.name.toUpperCase()}
                </p>
                <p className="mt-1 font-display text-[15px] italic leading-tight text-ink/70 sm:text-[16px]">
                  {p.line}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Closing */}
        <Reveal className="mx-auto mt-20 max-w-[640px] text-center lg:mt-28">
          <p className="font-display text-[22px] italic leading-snug text-maroon sm:text-[26px]">
            Your presence will make this special occasion even more memorable.
          </p>
          <div className="relative mx-auto mt-9 rounded-[40px_40px_40px_40px] border border-gold/70 bg-forest px-7 py-10 text-ivory shadow-[0_0_0_6px_var(--color-ivory-deep),0_0_0_7px_rgba(184,137,59,0.5),0_30px_60px_-30px_rgba(11,34,20,0.8)] sm:px-14">
            <p className="font-display text-[22px] italic leading-snug sm:text-[26px]">
              We look forward to welcoming you and celebrating this wonderful beginning together!
            </p>
            <Lotus className="mx-auto mt-6 w-10" />
          </div>
          <p className="eyebrow mt-10 text-[10px] text-gold-deep">
            <a href="https://haappyherbs.ae" target="_blank" rel="noopener noreferrer" className="transition hover:text-forest">
              haappyherbs.ae
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
