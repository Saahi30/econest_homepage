import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { products, images } from "@/data";

const collectionPaletteStories = [
  {
    name: "Ivory",
    hex: "#F5F0EB",
    image: "/images/econest-bedding-ivory.jpg",
    definition: "Warm, timeless, and softly illuminated. Ivory suits classic rooms, layered neutrals, and a calm boutique-hotel atmosphere.",
  },
  {
    name: "White",
    hex: "#FDFCFA",
    image: "/images/econest-sheet-set-white.jpg",
    definition: "Crisp and immaculate. White reflects five-star hospitality, freshness, and the quiet discipline of a beautifully kept room.",
  },
  {
    name: "Sage",
    hex: "#8FA68E",
    image: "/images/econest-bedding-sage.jpg",
    definition: "Restorative and natural. Sage reflects spa calm, quiet mornings, and interiors shaped by oak, stone, ivory, and greenery.",
  },
  {
    name: "Light Gray",
    hex: "#C7CBD1",
    image: "/images/econest-bedding-light-gray.jpg",
    definition: "Balanced and contemporary. Light Gray suits navy accents, stone surfaces, and bedrooms that need refined structure.",
  },
  {
    name: "Light Blue",
    hex: "#B7CCDA",
    image: "/images/econest-bedding-light-blue.jpg",
    definition: "Fresh and resort-like. Light Blue reflects quiet mornings, soft air, and a serene hospitality mood.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const imageReveal = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  whileInView: { clipPath: "inset(0 0% 0 0)" },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: "easeInOut" as const }
};

export default function Collections() {
  const [activePalette, setActivePalette] = useState(collectionPaletteStories[0]);

  return (
    <div className="overflow-hidden pt-24">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-caption text-sage mb-8">Collections</p>
            <h1 className="text-navy mb-8">
              The Econest<br />Collection
            </h1>
            <p className="text-editorial text-stone max-w-2xl">
              Each product is crafted with the same dedication to quality, from 
              <span className="text-highlight"> 100% Egyptian cotton</span> to the smooth sateen finish we perfect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products - Editorial layout */}
      <section className="relative bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-24 md:pt-32 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="py-24 md:py-32 border-t border-taupe/30 first:border-t-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <motion.div 
                  {...imageReveal}
                  className={`order-1 lg:order-none lg:row-start-1 ${index % 2 === 0 ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"}`}
                >
                  <div className="aspect-[4/3] editorial-shape overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover img-editorial hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  {...fadeUp}
                  className={`order-2 lg:order-none lg:row-start-1 ${index % 2 === 0 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1"}`}
                >
                  <div>
                    <p className="text-caption text-sage mb-4">{product.tagline}</p>
                    <h3 className="text-navy mb-6">{product.name}</h3>
                    <div className="signature-line text-sage mb-6">
                      {product.highlights.map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
                    </div>
                    <p className="text-editorial text-stone mb-8">{product.description}</p>
                    <div className="space-y-4 mb-8">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm text-stone font-medium">
                          <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button to={`/product/${product.id}`} variant="text">
                      View details →
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="relative py-32 md:py-48 bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mb-16"
          >
            <p className="text-caption text-sage mb-6">The Palette</p>
            <h2 className="text-navy">Six considered shades</h2>
            <p className="text-editorial text-stone mt-8 max-w-2xl">
              Hover or tap to see the mood behind each colorway and the rooms it was designed to complement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5">
              {collectionPaletteStories.map((color, index) => (
                <motion.button
                  key={color.name}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActivePalette(color)}
                  onFocus={() => setActivePalette(color)}
                  onClick={() => setActivePalette(color)}
                  className={`group text-left rounded-[2rem] border p-5 transition-all duration-500 ${
                    activePalette.name === color.name
                      ? "border-sage bg-ivory shadow-xl shadow-navy/5"
                      : "border-taupe/40 bg-ivory/45 hover:border-sage/60 hover:bg-ivory"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="color-swatch !w-12 !h-12 flex-shrink-0"
                      style={{ backgroundColor: color.hex, borderColor: color.name === "White" ? "#E5E5E5" : "var(--color-taupe)" }}
                    />
                    <span>
                      <span className="block font-display text-2xl text-navy leading-none">{color.name}</span>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-sage font-bold mt-2">
                        View mood
                      </span>
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activePalette.name}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:col-span-8 rounded-[3rem] bg-ivory p-4 md:p-6 shadow-2xl shadow-navy/8 border border-taupe/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="editorial-shape-sm aspect-[4/3] overflow-hidden">
                  <img
                    src={activePalette.image}
                    alt={`${activePalette.name} bedding lifestyle mood`}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
                <div className="p-2 md:p-4">
                  <p className="text-caption text-sage mb-3">Selected Shade</p>
                  <h3 className="text-navy mb-5">{activePalette.name}</h3>
                  <p className="text-editorial text-stone">{activePalette.definition}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-32 bg-navy overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(175,197,212,0.13),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(111,134,110,0.18),transparent_30%)]" />
        <div className="relative z-10 container-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div 
              {...fadeUp}
              className="lg:col-span-5"
            >
              <p className="text-caption text-sage mb-6">Coming Soon</p>
              <h2 className="text-cream mb-6">
                The Hotel Collection
              </h2>
              <p className="text-editorial text-cream/75">
                Inspired by the world's finest hospitality experiences. 
                Bringing the five-star sleep experience home in ways you never imagined.
              </p>
            </motion.div>
            <motion.div {...imageReveal} className="lg:col-span-7 editorial-shape">
              <div className="aspect-[5/4] max-h-[60vh]">
                <img
                  src={images.hotelBed}
                  alt="Luxury hotel"
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 md:py-48 bg-warm rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-50 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-[40%] bg-sage/15 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -bottom-32 h-[30rem] w-[30rem] rounded-[40%] bg-taupe/15 blur-3xl"
        />
        <div className="relative z-10 container-full">
          <motion.div 
            {...fadeUp}
            className="text-center"
          >
            <h2 className="text-navy mb-8">
              Ready to transform<br />your sleep?
            </h2>
            <p className="text-editorial text-stone mb-10 max-w-md mx-auto">
              Experience the difference of 1000 Thread Count Egyptian Cotton.
            </p>
            <Button href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4" variant="primary" external>
              Shop Now on Amazon
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
