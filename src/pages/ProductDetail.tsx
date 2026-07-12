import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { products, colorWays } from "@/data";

const AMAZON_STORE_URL =
  "https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const selectedVariant = useMemo(() => {
    if (!product || !selectedSize || !selectedColor) {
      return null;
    }

    return product.variants.find(
      (variant) => variant.size === selectedSize && variant.color === selectedColor
    ) ?? null;
  }, [product, selectedColor, selectedSize]);

  const amazonLink = useMemo(() => {
    if (!selectedVariant) {
      return AMAZON_STORE_URL;
    }

    return selectedVariant.url;
  }, [selectedVariant]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-display text-navy mb-4">Product Not Found</h1>
          <p className="text-stone text-sm mb-6">The product you're looking for doesn't exist.</p>
          <Button to="/collections" variant="primary">
            View Collections
          </Button>
        </div>
      </div>
    );
  }

  const availableSizes = Array.from(new Set(product.variants.map((variant) => variant.size)));
  const availableColors = selectedSize
    ? product.variants
        .filter((variant) => variant.size === selectedSize)
        .map((variant) => variant.color)
    : [];

  return (
    <div className="overflow-hidden pt-24">
      {/* Hero */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sage hover:text-navy text-xs font-bold tracking-wider uppercase mb-8 transition-colors"
              >
                ← Back to Collections
              </Link>
              <p className="text-caption text-sage mb-4">{product.tagline}</p>
              <h1 className="text-navy font-display max-w-3xl">
                {product.name}
              </h1>
              <div className="signature-line text-sage mt-8">
                {product.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-7 editorial-shape shadow-xl"
            >
              <div className="aspect-[5/4] max-h-[45vh] md:max-h-[64vh]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="relative py-16 md:py-32 bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            <motion.div {...fadeUp}>
              <p className="text-caption text-sage mb-6">Details</p>
              <h3 className="text-navy mb-8">Crafted for comfort</h3>
              <div className="space-y-6">
                {product.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-start gap-4 pb-6 border-b border-taupe/30 last:border-b-0"
                  >
                    <span className="text-xs text-sage font-sans tracking-wider mt-1">
                      0{index + 1}
                    </span>
                    <span className="text-stone font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="rounded-[3rem] bg-ivory border border-taupe/40 p-6 md:p-8 shadow-xl shadow-navy/5">
                <p className="text-caption text-sage mb-4">Find your fit</p>
                <h3 className="text-navy mb-5">Choose size, then colour</h3>
                <p className="text-sm text-stone font-medium leading-relaxed mb-8">
                  Select the exact fit and colour you want. The buy button will open Amazon with your chosen Econest Living product details.
                </p>

                <div className="mb-9">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-caption text-sage">1. Fit</p>
                    {selectedSize && <span className="text-xs font-bold text-navy">Selected: {selectedSize}</span>}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setSelectedSize(size);
                          setSelectedColor(null);
                        }}
                        className={`rounded-2xl border px-4 py-4 text-center text-sm font-bold transition-all duration-300 ${
                          selectedSize === size
                            ? "border-navy bg-navy text-cream shadow-lg shadow-navy/10"
                            : "border-taupe/50 bg-cream/70 text-stone hover:border-sage hover:text-navy"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-9">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-caption text-sage">2. Colour</p>
                    {selectedColor && <span className="text-xs font-bold text-navy">Selected: {selectedColor}</span>}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(selectedSize ? availableColors : product.colors).map((color) => {
                      const colorWay = colorWays.find((c) => c.name === color);
                      const isSelected = selectedColor === color;
                      const isAvailable = selectedSize ? availableColors.includes(color) : false;

                      return (
                        <button
                          key={color}
                          type="button"
                          disabled={!selectedSize || !isAvailable}
                          onClick={() => setSelectedColor(color)}
                          className={`rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                            isSelected
                              ? "border-sage bg-cream shadow-lg shadow-navy/10"
                              : selectedSize && isAvailable
                                ? "border-taupe/50 bg-cream/70 hover:border-sage hover:bg-cream"
                                : "border-taupe/30 bg-cream/35 opacity-50 cursor-not-allowed"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className="h-7 w-7 rounded-full border border-taupe/50 flex-shrink-0"
                              style={{ backgroundColor: colorWay?.hex || "#fff" }}
                            />
                            <span className="text-sm font-bold text-navy">{color}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-cream p-5 border border-taupe/30 mb-6">
                  <p className="text-caption text-sage mb-3">Your Selection</p>
                  <p className="font-display text-2xl text-navy leading-tight">
                    {selectedSize || "Choose a fit"} {selectedColor ? `in ${selectedColor}` : "then select a colour"}
                  </p>
                  {selectedVariant && (
                    <p className="mt-3 text-sm leading-relaxed text-stone font-medium">
                      {selectedVariant.details}
                    </p>
                  )}
                </div>

                <a
                  href={selectedSize && selectedColor ? amazonLink : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!selectedSize || !selectedColor}
                  className={`inline-flex w-full items-center justify-center rounded-full px-8 py-5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    selectedSize && selectedColor
                      ? "bg-navy text-cream hover:bg-navy-soft hover:-translate-y-0.5"
                      : "bg-taupe/50 text-stone cursor-not-allowed pointer-events-none"
                  }`}
                >
                  Buy Now
                </a>
                <p className="mt-4 text-xs leading-relaxed text-stone font-medium">
                  Amazon selection pages may show the final available variant before purchase.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Note */}
      <section className="relative py-16 md:py-32 bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-caption text-sage mb-6">The Econest Standard</p>
            <h2 className="text-navy mb-8">
              Every detail matters
            </h2>
            <p className="text-editorial text-stone mb-10">
              From the length of the cotton fibers to the precision of the stitching, 
              our bedding is designed to deliver an uncompromising sleep experience. 
              We believe that the quality of your bedding directly impacts the quality of your rest.
            </p>
            <Button to="/craftsmanship" variant="minimal">
              Learn About Our Craft
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 md:py-32 bg-navy rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="container-full">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-cream mb-6">
              Complete your selection<br />above
            </h2>
            <p className="text-editorial text-cream/75 mb-10 max-w-xl mx-auto">
              Choose your preferred fit and colour to open the most relevant Amazon destination for that selection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/collections" variant="primary" className="bg-cream text-navy border-cream hover:bg-powder-soft">
                View Collections
              </Button>
              <Button to="/contact" variant="minimal" className="border-cream/30 text-cream hover:bg-cream hover:text-navy">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

