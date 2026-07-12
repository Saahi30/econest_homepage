import { motion } from "framer-motion";
import Button from "@/components/Button";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Contact() {
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
            <p className="text-caption text-sage mb-8">Contact</p>
            <h1 className="text-navy mb-8">
              We'd love to<br />hear from you
            </h1>
            <p className="text-editorial text-stone max-w-2xl">
              Whether you have a question about our products, need help choosing the right size, 
              or simply want to learn more about our craft — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="relative py-24 md:py-32 bg-ivory rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div {...fadeUp}>
              <p className="text-caption text-sage mb-6">Get in Touch</p>
              <h3 className="text-navy mb-10">Start a conversation</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-stone font-sans tracking-wider uppercase mb-2">Email</p>
                  <a 
                    href="mailto:Econestexport@gmail.com" 
                    className="text-lg font-display text-navy hover:text-sage transition-colors"
                  >
                    Econestexport@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-stone font-sans tracking-wider uppercase mb-2">Shop</p>
                  <a 
                    href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-display text-navy hover:text-sage transition-colors"
                  >
                    Amazon Storefront
                  </a>
                </div>
                <div>
                  <p className="text-xs text-stone font-sans tracking-wider uppercase mb-2">Response Time</p>
                  <p className="text-lg font-display text-navy">Within 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="p-10 bg-cream shadow-sm">
                <h3 className="text-navy text-xl mb-8">Send a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-stone font-sans tracking-wider uppercase mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-taupe/50 text-navy text-sm placeholder:text-stone/40 focus:outline-none focus:border-sage transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone font-sans tracking-wider uppercase mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-taupe/50 text-navy text-sm placeholder:text-stone/40 focus:outline-none focus:border-sage transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-stone font-sans tracking-wider uppercase mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-taupe/50 text-navy text-sm placeholder:text-stone/40 focus:outline-none focus:border-sage transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone font-sans tracking-wider uppercase mb-3">
                      Subject
                    </label>
                    <select className="w-full px-0 py-3 bg-transparent border-0 border-b border-taupe/50 text-navy text-sm focus:outline-none focus:border-sage transition-colors cursor-pointer">
                      <option value="">Select a topic</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-stone font-sans tracking-wider uppercase mb-3">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-taupe/50 text-navy text-sm placeholder:text-stone/40 focus:outline-none focus:border-sage transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button variant="primary" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 bg-cream rounded-t-[3rem] md:rounded-t-[4rem] -mt-12 z-30 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <div className="container-full">
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto"
          >
            <p className="text-caption text-sage mb-6 text-center">FAQ</p>
            <h2 className="text-navy mb-16 text-center">Common questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What makes Egyptian cotton different?",
                  a: "Egyptian cotton features extra-long staple fibers that create stronger, finer yarns. This results in fabric that is softer, more durable, and more lustrous than standard cotton.",
                },
                {
                  q: "What does 1000 thread count mean?",
                  a: "Thread count refers to the number of threads woven into one square inch of fabric. 1000 thread count provides an optimal balance of softness, durability, and breathability.",
                },
                {
                  q: "How should I care for my Econest bedding?",
                  a: "Machine wash in cold water on a gentle cycle. Tumble dry on low. Avoid bleach and fabric softeners. Your sheets will become softer with each wash.",
                },
                {
                  q: "Where can I purchase Econest products?",
                  a: "Our products are available exclusively through Amazon and select international marketplaces. Visit our Amazon storefront for the full collection.",
                },
                {
                  q: "Do you offer international shipping?",
                  a: "Yes, through Amazon's global marketplace network. Availability varies by region. Check our Amazon storefront for shipping options to your location.",
                },
              ].map((faq, index) => (
                <motion.details
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-ivory/50"
                >
                  <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between text-sm font-display text-navy hover:text-sage transition-colors">
                    {faq.q}
                    <svg className="w-4 h-4 text-stone group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm text-stone leading-relaxed">{faq.a}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
