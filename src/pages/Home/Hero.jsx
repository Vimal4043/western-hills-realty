import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import homeHero3 from "../../assets/homeHero3.jpg";
import homeHero4 from "../../assets/homeHero4.jpg";
import homeHero5 from "../../assets/homeHero5.jpg";
import { BRAND } from "../../data/projects.js";

const SLIDES = [
  { src: homeHero3, alt: "Luxury residential villa" },
  { src: homeHero4, alt: "Modern family home exterior" },
  { src: homeHero5, alt: "Premium residential exterior" },
];

const SLIDE_MS = 5000;

const STATS = [
  { value: "1 RK · 1 BHK · 2 BHK", label: "Configurations" },
  { value: "Purchase · Rental", label: "Services" },
  { value: "Lonavala", label: "Prime Focus" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(-1);

  const indexRef = useRef(0);
  const transitionRef = useRef(false);
  const preloadRef = useRef(null);
  const mountedRef = useRef(true);

  const transitionTo = useCallback((nextIndex) => {
    if (
      !mountedRef.current ||
      transitionRef.current ||
      nextIndex === indexRef.current
    ) {
      return;
    }

    transitionRef.current = true;

    const currentIndex = indexRef.current;
    const nextImage = new Image();

    preloadRef.current = nextImage;

    nextImage.onload = () => {
      if (!mountedRef.current || preloadRef.current !== nextImage) return;

      indexRef.current = nextIndex;
      setPrev(currentIndex);
      setIndex(nextIndex);

      transitionRef.current = false;
      preloadRef.current = null;
    };

    nextImage.onerror = () => {
      if (preloadRef.current !== nextImage) return;

      transitionRef.current = false;
      preloadRef.current = null;
    };

    nextImage.src = SLIDES[nextIndex].src;
  }, []);

  /* AUTO SLIDE
   * The old 30ms interval re-rendered the whole hero ~33x/second just to
   * update a progress value that was never displayed. A plain interval
   * is enough and keeps phones smooth. */
  useEffect(() => {
    mountedRef.current = true;

    const timer = setInterval(() => {
      transitionTo((indexRef.current + 1) % SLIDES.length);
    }, SLIDE_MS);

    return () => {
      clearInterval(timer);

      mountedRef.current = false;
      transitionRef.current = false;

      if (preloadRef.current) {
        preloadRef.current.onload = null;
        preloadRef.current.onerror = null;
        preloadRef.current.src = "";
        preloadRef.current = null;
      }
    };
  }, [transitionTo]);

  const slide = SLIDES[index];

  /*
   * TOP PADDING = fixed header height + breathing room
   *   < md  : header 80px  (5rem)    -> 6.5rem
   *   >= md : header 116px (7.25rem) -> 8.75rem
   * Keep in sync with Navbar. If your layout already adds padding-top
   * for the fixed header, remove the pt-[...] values below.
   */
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full overflow-hidden bg-navy"
    >
      <div className="relative flex w-full flex-col sm:min-h-[max(37.5rem,70svh)] lg:min-h-[max(39.75rem,82svh)]">
        {/* ACTIVE IMAGE */}
        <motion.img
          key={`active-${index}`}
          src={slide.src}
          alt={slide.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading="eager"
          onError={() => {
            if (prev >= 0) {
              indexRef.current = prev;
              setIndex(prev);
              setPrev(-1);
            }
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* PREVIOUS IMAGE FOR CROSSFADE */}
        {prev >= 0 && prev !== index && (
          <motion.img
            key={`prev-${prev}-${index}`}
            src={SLIDES[prev].src}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => setPrev(-1)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* OVERLAYS
            Mobile: text spans full width, so use an even dark wash.
            sm+: left-to-right gradient so the image shows on the right. */}
        <div className="pointer-events-none absolute inset-0 bg-navy/70 sm:bg-transparent sm:bg-linear-to-r sm:from-navy/95 sm:via-navy/65 sm:to-navy/15" />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy via-navy/15 to-transparent" />

        {/* TOP PROTECTION under the header */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-navy/50 to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-start px-5 pt-[5.3rem] pb-8 sm:items-center sm:px-6 sm:pb-10 md:pt-[5.75rem] lg:px-8 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl"
          >
            {/* LOCATION */}
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-gold/45 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-gold-light backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
              <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              <span className="min-w-0 truncate">{BRAND.address}</span>
            </span>

            {/* HEADING */}
            <h1 className="mt-4 max-w-[680px] font-heading text-[1.75rem] leading-[1.1] font-semibold tracking-tight text-white min-[380px]:text-[2rem] sm:mt-5 sm:text-4xl md:text-[2.6rem] lg:text-5xl">
              Find your home in{" "}
              <span className="text-gold">the Lonavala hills</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7 lg:leading-8">
              {BRAND.name} is a real estate consultancy led by {BRAND.owner},
              connecting families and investors with verified apartments, shops
              and offices across Lonavala and the wider Pune hills — with clear
              pricing and guidance at every step.
            </p>

            {/* CTA */}
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                to="/projects"
                data-testid="hero-browse-projects"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light sm:w-auto sm:px-7"
              >
                Browse Properties
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                data-testid="hero-call"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-gold hover:bg-white/20 sm:w-auto sm:px-7"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
                {BRAND.phone}
              </a>
            </div>

            {/* STATS */}
            <dl className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-4 sm:mt-8 sm:gap-x-5 sm:pt-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>

                  <dd>
                    <span className="block font-heading text-xs leading-4 font-semibold text-white sm:text-base sm:leading-6">
                      {stat.value}
                    </span>

                    <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-white/60 sm:text-[11px] sm:tracking-[0.18em]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
