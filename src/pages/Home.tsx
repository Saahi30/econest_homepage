import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import Button from "@/components/Button";

const brandImages = [
  "/images/econest-hero-ivory-bed.jpg",
  "/images/econest-sheet-set-white.jpg",
  "/images/econest-fitted-sheet-white.jpg",
  "/images/econest-pillowcases-white.jpg",
  "/images/econest-thread-macro.jpg",
  "/images/econest-bedding-ivory.jpg",
  "/images/econest-bedding-sage.jpg",
  "/images/econest-bedding-light-blue.jpg",
];

const cottonFieldImage =
  "https://images.pexels.com/photos/37802648/pexels-photo-37802648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400";

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const imageReveal = {
  initial: { clipPath: "inset(12% 12% 12% 12% round 44px)", opacity: 0.55 },
  whileInView: { clipPath: "inset(0% 0% 0% 0% round 44px)", opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.05, ease: "easeInOut" as const },
};

const essentials = [
  {
    title: "Sheet Sets",
    note: "The complete foundation",
    copy: "A full Egyptian cotton sleep setting with a smooth 1000 thread count sateen hand.",
    image: brandImages[1],
    to: "/product/sheet-set",
  },
  {
    title: "Fitted Sheets",
    note: "Tailored 16-inch fit",
    copy: "All-around elastic and deep pocket construction for a bed that stays composed.",
    image: brandImages[2],
    to: "/product/fitted-sheet",
  },
  {
    title: "Pillowcases",
    note: "The finishing layer",
    copy: "Soft, breathable pillowcases with a refined hotel-inspired finish.",
    image: brandImages[3],
    to: "/product/pillowcase-set",
  },
];

const whyEconest = [
  {
    title: "Long-Staple Egyptian Cotton",
    label: "Material",
    text: "Selected for a smoother yarn, refined drape, and the substantial feel expected from premium hospitality bedding.",
    image: brandImages[0],
  },
  {
    title: "Cooling Sateen Weave",
    label: "Comfort",
    text: "A luminous 1000 thread count surface that feels soft, breathable, and cool at first touch.",
    image: brandImages[1],
  },
  {
    title: "Tailored, Secure Fit",
    label: "Fit",
    text: "Deep-pocket construction and all-around elastic help keep the bed smooth, composed, and hotel-finished.",
    image: brandImages[2],
  },
  {
    title: "Enduring Softness",
    label: "Longevity",
    text: "Made to soften beautifully while retaining structure, so the bed feels considered night after night.",
    image: brandImages[3],
  },
];

const paletteStories = [
  {
    name: "Ivory",
    hex: "#F5F0EB",
    image: "/images/econest-hero-ivory-bed.jpg",
    definition:
      "Ivory feels warm, quiet, and royal. It suits cream walls, brass accents, and bedrooms that should feel softer than pure white.",
  },
  {
    name: "White",
    hex: "#FDFCFA",
    image: "/images/econest-sheet-set-white.jpg",
    definition:
      "White is the colour of five-star hospitality. It reflects freshness, precision, and the calm discipline of an immaculate suite.",
  },
  {
    name: "Sage",
    hex: "#8FA68E",
    image: "/images/econest-bedding-sage.jpg",
    definition:
      "Sage is restorative and spa-like. It reflects nature, slow mornings, and interiors shaped by oak, linen, and soft light.",
  },
  {
    name: "Light Gray",
    hex: "#C7CBD1",
    image: "/images/econest-bedding-light-gray.jpg",
    definition:
      "Light Gray is composed and contemporary. It suits navy accents, stone surfaces, and refined rooms that need quiet structure.",
  },
  {
    name: "Light Blue",
    hex: "#B7CCDA",
    image: "/images/econest-bedding-light-blue.jpg",
    definition:
      "Light Blue feels fresh and resort-like. It reflects quiet mornings, coastal calm, and a softer take on luxury hotel bedding.",
  },
];

function ThreadCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, 1000, { duration: 2.2, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function HeroVisual() {
  const { scrollYProgress } = useScroll();
  const yPrimary = useTransform(scrollYProgress, [0, 0.35], [0, -42]);
  const ySecondary = useTransform(scrollYProgress, [0, 0.35], [0, 34]);

  return (
    <div className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[680px]">
      <motion.div
        style={{ y: yPrimary }}
        initial={{ opacity: 0, clipPath: "inset(18% 18% 18% 18% round 64px)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 64px)" }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-[72%] w-[78%] overflow-hidden rounded-[4rem] shadow-2xl shadow-navy/20"
      >
        <img src={brandImages[0]} alt="Econest Living premium bedding" className="h-full w-full object-cover img-editorial" />
      </motion.div>

      <motion.div
        style={{ y: ySecondary }}
        initial={{ opacity: 0, x: -26 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
        className="absolute bottom-4 left-0 h-[42%] w-[48%] overflow-hidden rounded-[3rem] border-[12px] border-cream bg-cream shadow-2xl shadow-navy/15"
      >
        <img src={brandImages[2]} alt="Egyptian cotton fitted sheet" className="h-full w-full object-cover img-editorial" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.9, ease: "easeOut" }}
        className="absolute bottom-12 right-8 hidden max-w-[260px] rounded-[2rem] bg-cream/92 px-6 py-5 shadow-xl backdrop-blur md:block"
      >
        <p className="text-caption text-sage mb-2">Signature Feel</p>
        <p className="text-sm font-bold leading-relaxed text-navy">1000 thread count sateen, tailored with a hotel-quality finish.</p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [activePalette, setActivePalette] = useState(paletteStories[0]);
  const [activeWhy, setActiveWhy] = useState(0);

  return (
    <div className="overflow-hidden bg-cream">
      <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f4ecdf_54%,#dfeaf0_100%)] pt-28 md:pt-36">
        <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-powder/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-full relative z-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 54 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <p className="text-caption text-sage mb-7">Est. in the tradition of Nile cotton</p>
              <h1 className="text-navy mb-8 max-w-xl">
                ECONEST<span className="text-sage">.</span><br />
                <span className="italic text-sage">Rest, composed.</span>
              </h1>
              <p className="text-editorial text-stone mb-8 max-w-lg">
                Econest Living is a house devoted to one material and one weave: 100% Egyptian cotton at 1000 thread count. Sateen-finished, 16-inch deep-pocketed, and composed the way the world's quietest hotels compose a bed.
              </p>
              <div className="signature-line text-navy mb-10">
                <span>Econest Living</span>
                <span>Egyptian Cotton</span>
                <span>1000 TC · Sateen</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button to="/collections" variant="primary" size="lg">Explore Collection</Button>
                <Button href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4" variant="editorial" size="lg" external>Shop on Amazon</Button>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-44 md:pb-36 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(175,197,212,0.2),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(111,134,110,0.16),transparent_32%)]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-24 h-56 w-56 rounded-full border border-sage/20"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -18, 0], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-8 top-1/3 h-3 w-3 rounded-full bg-sage"
        />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-caption text-sage mb-5">Why Econest</p>
              <h2 className="text-navy mb-7">A calmer standard of bedding.</h2>
              <p className="text-editorial text-stone mb-10">
                Every detail is chosen to make the bed feel composed before sleep begins: smoother cotton, cooler touch, cleaner fit, and lasting softness.
              </p>
              <div className="hidden lg:block h-px w-40 bg-gradient-to-r from-sage to-transparent" />
            </motion.div>

            <motion.div {...imageReveal} className="lg:col-span-4 lg:col-start-5">
              <div className="relative mx-auto max-w-[520px]">
                <motion.div
                  key={whyEconest[activeWhy].image}
                  initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="aspect-[4/5] overflow-hidden rounded-[4rem] bg-ivory shadow-2xl shadow-navy/12"
                >
                  <img
                    src={whyEconest[activeWhy].image}
                    alt={whyEconest[activeWhy].title}
                    className="h-full w-full object-cover img-editorial"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-4 rounded-[2rem] bg-cream/95 px-6 py-5 shadow-xl backdrop-blur md:-left-10"
                >
                  <p className="text-caption text-sage mb-2">Active Detail</p>
                  <p className="max-w-[220px] text-sm font-bold leading-relaxed text-navy">{whyEconest[activeWhy].title}</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-4">
              <div className="space-y-3">
                {whyEconest.map((item, index) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    onMouseEnter={() => setActiveWhy(index)}
                    onFocus={() => setActiveWhy(index)}
                    onClick={() => setActiveWhy(index)}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.58, delay: index * 0.08, ease: "easeOut" }}
                    whileHover={{ x: 8 }}
                    className={`group w-full rounded-[2rem] border p-5 text-left transition-all duration-500 ${
                      activeWhy === index
                        ? "border-sage bg-ivory shadow-xl shadow-navy/8"
                        : "border-taupe/35 bg-cream/55 hover:border-sage/60 hover:bg-ivory"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-caption text-sage">{item.label}</span>
                      <span className="font-display text-2xl leading-none text-taupe">0{index + 1}</span>
                    </div>
                    <h3 className="text-2xl text-navy mb-3">{item.title}</h3>
                    <motion.div
                      initial={false}
                      animate={{ height: activeWhy === index ? "auto" : 0, opacity: activeWhy === index ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm font-medium leading-relaxed text-stone">{item.text}</p>
                    </motion.div>
                    <motion.div
                      initial={false}
                      animate={{ scaleX: activeWhy === index ? 1 : 0.18 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="mt-5 h-px origin-left bg-sage"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-40 md:pb-32 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <motion.div {...imageReveal} className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[4rem] shadow-2xl shadow-navy/10">
                <img src={brandImages[4]} alt="Macro weave of 1000 Thread Count Egyptian cotton sateen" className="h-full max-h-[400px] md:max-h-[500px] lg:max-h-[660px] w-full object-cover img-editorial" loading="lazy" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 rounded-[2rem] bg-cream/92 px-7 py-5 backdrop-blur shadow-xl md:left-8 md:right-8 md:bottom-8"
                >
                  <div>
                    <p className="text-caption text-sage mb-1">Thread Count</p>
                    <p className="font-display text-5xl leading-none text-navy md:text-6xl">
                      <ThreadCounter />
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-caption text-sage mb-1">Weave</p>
                    <p className="font-display text-2xl leading-tight text-navy">Sateen</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone mt-1">Extra-long staple</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-4 lg:col-start-9">
              <p className="text-caption text-sage mb-6">Signature Collection</p>
              <h2 className="text-navy mb-7">1000 Thread Count, Sateen Woven.</h2>
              <p className="text-editorial text-stone mb-8">
                A dense, smooth weave that feels cool at first touch and settles into the room with quiet elegance.
              </p>
              <div className="feature-ledger mb-9">
                <div className="feature-ledger-row">
                  <span className="feature-ledger-label">Material</span>
                  <span className="feature-ledger-value">100% Egyptian cotton</span>
                </div>
                <div className="feature-ledger-row">
                  <span className="feature-ledger-label">Finish</span>
                  <span className="feature-ledger-value">Cooling sateen with a soft hotel-quality feel</span>
                </div>
                <div className="feature-ledger-row">
                  <span className="feature-ledger-label">Fit</span>
                  <span className="feature-ledger-value">Fitted sheets with a 16-inch deep pocket</span>
                </div>
              </div>
              <Button to="/collections" variant="editorial">Discover the Collection</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-40 md:pb-32 z-40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-14 max-w-3xl">
            <p className="text-caption text-sage mb-5">The Essentials</p>
            <h2 className="text-navy mb-7">Three pieces. Endless comfort.</h2>
            <p className="text-editorial text-stone">A focused bedding collection designed to complete the bed without visual noise.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {essentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <Link
                  to={item.to}
                  className="group block h-full overflow-hidden rounded-[3rem] bg-ivory shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/8"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover img-editorial" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <p className="text-caption text-sage mb-3">{item.note}</p>
                    <h3 className="text-navy text-3xl mb-4">{item.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-stone mb-6">{item.copy}</p>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy group-hover:text-sage">View details</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-warm rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-40 md:pb-32 z-50 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-caption text-sage mb-6">Craftsmanship</p>
              <h2 className="text-navy mb-7">From the Nile Delta.</h2>
              <p className="text-editorial text-stone mb-8">
                Inspired by the region where Egyptian cotton earned its reputation, our bedding focuses on fiber quality, careful weaving, and calm precision.
              </p>
              <Button to="/craftsmanship" variant="editorial">Our Process</Button>
            </motion.div>
            <motion.div {...imageReveal} className="lg:col-span-7 lg:col-start-6">
              <div className="overflow-hidden rounded-[4rem] shadow-xl shadow-navy/10">
                <img src={cottonFieldImage} alt="Egyptian cotton plants at golden hour" className="h-full max-h-[400px] md:max-h-[600px] w-full object-cover img-editorial" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-40 md:pb-32 z-[60] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <motion.div {...fadeUp} className="mb-14 max-w-3xl">
            <p className="text-caption text-sage mb-5">Color Collection</p>
            <h2 className="text-navy mb-7">Choose the mood of the room.</h2>
            <p className="text-editorial text-stone">Hover or tap a shade to see how each color changes the feeling of the bed.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-2">
              {paletteStories.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onMouseEnter={() => setActivePalette(color)}
                  onFocus={() => setActivePalette(color)}
                  onClick={() => setActivePalette(color)}
                  className={`rounded-[2rem] border p-5 text-left transition-all duration-500 ${activePalette.name === color.name ? "border-sage bg-ivory shadow-xl shadow-navy/5" : "border-taupe/40 bg-ivory/50 hover:border-sage"}`}
                >
                  <span className="mb-4 block h-12 w-12 rounded-full border border-taupe/50" style={{ backgroundColor: color.hex }} />
                  <span className="font-display text-2xl leading-none text-navy">{color.name}</span>
                </button>
              ))}
            </div>
            <motion.div
              key={activePalette.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[3.5rem] bg-ivory p-5 shadow-2xl shadow-navy/8 lg:col-span-8"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                <div className="aspect-[4/3] overflow-hidden rounded-[2.75rem]">
                  <img src={activePalette.image} alt={`${activePalette.name} bedding mood`} className="h-full w-full object-cover img-editorial" loading="lazy" />
                </div>
                <div className="p-3 md:p-6">
                  <p className="text-caption text-sage mb-4">Selected Shade</p>
                  <h3 className="text-navy mb-5">{activePalette.name}</h3>
                  <p className="text-editorial text-stone">{activePalette.definition}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-20 pb-16 md:pt-40 md:pb-32 z-[70] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(175,197,212,0.16),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(111,134,110,0.15),transparent_34%)]" />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <p className="text-caption text-sage mb-6">Hospitality Quality</p>
              <h2 className="text-cream mb-7">The five-star experience, reimagined for home.</h2>
              <p className="text-editorial text-cream/75 mb-9">A refined sleep setting built around softness, temperature comfort, and the quiet confidence of a well-dressed bed.</p>
              <Button href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4" variant="minimal" className="border-cream/30 text-cream hover:bg-cream hover:text-navy" external>Experience Econest</Button>
            </motion.div>
            <motion.div {...imageReveal} className="lg:col-span-7">
              <div className="overflow-hidden rounded-[4rem]">
                <img src={brandImages[5]} alt="Ivory Econest Living bedding in a composed bedroom" className="h-full max-h-[400px] md:max-h-[620px] w-full object-cover img-editorial" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
