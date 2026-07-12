import { motion } from "framer-motion";
import Button from "@/components/Button";
import { images } from "@/data";
import SEO from "@/components/SEO";

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

export default function About() {
  return (
    <div className="overflow-hidden pt-24">
      <SEO 
        title="About Us | Econest Living" 
        description="Learn about Econest Living's dedication to providing five-star hospitality quality Egyptian cotton bedding for your home." 
      />
      {/* Hero with editorial shape */}
      <section className="py-16 md:py-32 bg-cream relative">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-caption text-sage mb-8">About</p>
            <h1 className="text-navy mb-8">
              The pursuit of<br />perfect sleep
            </h1>
            <p className="text-editorial text-stone max-w-2xl">
              Founded on the belief that exceptional rest should be accessible to all who value quality, 
              Econest Living represents the intersection of traditional craftsmanship and modern luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Asymmetrical with luxury shapes */}
      <section className="relative bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-16 md:pt-32 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full py-16 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <motion.div 
              {...imageReveal}
              className="lg:col-span-6 lg:col-start-1 editorial-shape"
            >
              <img
                src={images.towels}
                alt="Premium cotton textiles"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              {...fadeUp}
              className="lg:col-span-5 lg:col-start-8 py-8"
            >
              <p className="text-caption text-sage mb-6">Our Story</p>
              <h3 className="text-navy mb-6">
                Rooted in quality,<br />defined by comfort
              </h3>
              <div className="space-y-6 text-editorial text-stone">
                <p>
                  Our founders spent years traveling the world, experiencing the profound difference 
                  that premium bedding makes to sleep quality. Yet, truly exceptional sheets were 
                  either inaccessible or prohibitively expensive.
                </p>
                <p>
                  That realization led us to the Nile Delta, where we established direct relationships 
                  with cotton farmers and textile artisans who have perfected their craft over generations.
                </p>
                <p>
                  By sourcing directly and maintaining rigorous quality standards, we offer 1000 Thread 
                  Count Egyptian Cotton bedding that rivals the world's finest hotels.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Editorial cards with luxury shapes */}
      <section className="relative py-20 md:py-48 bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <motion.div 
            {...fadeUp}
            className="text-center mb-20"
          >
            <p className="text-caption text-sage mb-6">Principles</p>
            <h2 className="text-navy">What we stand for</h2>
          </motion.div>

          <div className="editorial-grid">
            {[
              {
                title: "Quality Without Compromise",
                desc: "We refuse to cut corners. From cotton selection to final packaging, every step meets the highest standard.",
              },
              {
                title: "Thoughtful Design",
                desc: "Every detail is intentional — from pocket depth to hem stitching — designed for real comfort and lasting beauty.",
              },
              {
                title: "Sustainable Practices",
                desc: "Our cotton is sourced from farms prioritizing environmental stewardship and fair labor practices.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="editorial-card p-8 luxury-detail text-center"
              >
                <p className="text-caption text-sage mb-6">0{index + 1}</p>
                <h4 className="text-navy text-xl mb-4">{value.title}</h4>
                <p className="text-stone text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual pause, framed with copy so the image does not dominate the full screen */}
      <section className="relative py-16 md:py-32 bg-warm rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-40 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-editorial" />
        <div className="container-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-5 lg:col-start-1">
              <p className="text-caption text-sage mb-6">A Calmer Standard</p>
              <h3 className="text-navy mb-6">Luxury should feel quiet, not loud.</h3>
              <p className="text-editorial text-stone">
                Our role is to refine the daily ritual of rest with materials, colors, and finishing details that feel composed every time you enter the room.
              </p>
            </motion.div>
            <motion.div {...imageReveal} className="lg:col-span-6 lg:col-start-7 editorial-shape">
              <div className="aspect-[4/3]">
                <img
                  src={images.bedroomLuxury}
                  alt="Elegant bedroom interior"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA with luxury background */}
      <section className="relative py-20 md:py-48 bg-navy rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-50 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="container-full">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-cream mb-8">
              Experience the<br />Econest difference
            </h2>
            <p className="text-editorial text-cream/75 mb-12">
              Join thousands of customers who have transformed their sleep with our 
              premium Egyptian cotton bedding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/collections" variant="primary" size="lg" className="bg-cream text-navy border-cream hover:bg-powder-soft">
                Explore Collections
              </Button>
              <Button
                href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4"
                variant="minimal"
                size="lg"
                className="border-cream/30 text-cream hover:bg-cream hover:text-navy"
                external
              >
                Shop on Amazon
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

