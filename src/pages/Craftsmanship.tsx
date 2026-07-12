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

export default function Craftsmanship() {
  return (
    <div className="overflow-hidden pt-24">
      <SEO 
        title="Our Craftsmanship | Econest Living" 
        description="Discover the meticulous process behind our 1000 thread count Egyptian cotton bedding, from fertile soils of the Nile Delta to state-of-the-art weaving." 
      />
      {/* Hero */}
      <section className="py-16 md:py-32 bg-cream">
        <div className="container-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-caption text-sage mb-8">Craftsmanship</p>
            <h1 className="text-navy mb-8">
              Where tradition<br />meets precision
            </h1>
            <p className="text-editorial text-stone max-w-2xl">
              Every yard of our fabric is a testament to centuries of textile expertise, 
              combined with modern quality standards that ensure consistency and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 pt-16 md:pt-32 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          {[
            {
              number: "01",
              title: "Cotton Cultivation",
              desc: "Our journey begins in the fertile soils of the Nile Delta, where Egyptian cotton has been grown for millennia. We select only extra-long staple cotton — fibers measuring over 1.5 inches — which create stronger, finer, and more lustrous yarns.",
              image: images.weaving,
              stats: [
                { label: "Fiber Length", value: "1.5\"+" },
                { label: "Harvest", value: "Hand-picked" },
              ],
            },
            {
              number: "02",
              title: "Ginning & Cleaning",
              desc: "Once harvested, the cotton undergoes a meticulous ginning process that separates the fibers from seeds. Our cotton is cleaned and combed to remove any impurities, resulting in a perfectly uniform fiber ready for spinning.",
              image: images.loom,
              stats: [
                { label: "Purity", value: "99.9%" },
                { label: "Process", value: "Combed" },
              ],
            },
            {
              number: "03",
              title: "Spinning & Weaving",
              desc: "Using state-of-the-art spinning mills, our fibers are transformed into exceptionally fine yarns. We weave our fabric using a sateen technique at exactly 1000 threads per square inch — a density that delivers a silky smooth feel while maintaining breathability and durability.",
              image: images.sheetsCloseup,
              stats: [
                { label: "Thread Count", value: "1000" },
                { label: "Weave", value: "Sateen" },
              ],
            },
            {
              number: "04",
              title: "Finishing",
              desc: "Our fabric undergoes mercerization — a treatment that enhances luster, strength, and dye affinity. Each piece is then inspected by hand for consistency. Only pieces meeting our exacting standards receive the Econest Living label.",
              image: images.sheetsStack,
              stats: [
                { label: "Inspection", value: "Hand-checked" },
                { label: "Guarantee", value: "Quality assured" },
              ],
            },
          ].map((step, index) => (
            <div 
              key={step.number}
              className="py-16 md:py-32 border-t border-taupe/30 first:border-t-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center ${
                index % 2 === 1 ? "" : ""
              }`}>
                <motion.div 
                  {...(index % 2 === 0 ? imageReveal : fadeUp)}
                  className={`${index % 2 === 0 ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-5 lg:col-start-1 lg:order-2"}`}
                >
                  {index % 2 === 0 ? (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover img-editorial"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ) : (
                    <div>
                      <span className="text-8xl font-display text-taupe/30 block mb-6">
                        {step.number}
                      </span>
                      <h3 className="text-navy mb-6">{step.title}</h3>
                      <p className="text-editorial text-stone mb-8">{step.desc}</p>
                      <div className="flex gap-6">
                        {step.stats.map((stat) => (
                          <div key={stat.label}>
                            <span className="block text-2xl font-display text-sage">{stat.value}</span>
                            <span className="block text-xs text-stone font-sans tracking-wider uppercase mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
                <motion.div 
                  {...(index % 2 === 0 ? fadeUp : imageReveal)}
                  className={`${index % 2 === 0 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-6 lg:col-start-7 lg:order-1"}`}
                >
                  {index % 2 === 0 ? (
                    <div>
                      <span className="text-8xl font-display text-taupe/30 block mb-6">
                        {step.number}
                      </span>
                      <h3 className="text-navy mb-6">{step.title}</h3>
                      <p className="text-editorial text-stone mb-8">{step.desc}</p>
                      <div className="flex gap-6">
                        {step.stats.map((stat) => (
                          <div key={stat.label}>
                            <span className="block text-2xl font-display text-sage">{stat.value}</span>
                            <span className="block text-xs text-stone font-sans tracking-wider uppercase mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover img-editorial"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className="relative py-20 md:py-48 bg-navy rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="container-full">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-caption text-sage mb-8">Our Promise</p>
            <h2 className="text-cream mb-8">
              Quality that endures
            </h2>
            <p className="text-editorial text-cream/75 mb-12">
              When you choose Econest Living, you're choosing bedding designed to last. 
              Our 1000 Thread Count Egyptian Cotton not only gets softer with every wash 
              but maintains its integrity and beauty for years to come.
            </p>
            <Button to="/collections" variant="primary" className="bg-cream text-navy border-cream hover:bg-powder-soft">
              Browse Collection
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

