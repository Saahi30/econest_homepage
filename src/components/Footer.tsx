import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-taupe/20">
      <div className="container-full py-16 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          
          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <Link to="/" className="flex items-center mb-8">
              <img
                src="/images/logo.png"
                alt="Econest Living"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-stone text-sm leading-relaxed">
              Premium Egyptian cotton bedding crafted for those who appreciate the 
              art of restful sleep and timeless comfort.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            <div>
              <p className="text-xs font-sans tracking-widest uppercase text-sage mb-6">Explore</p>
              <ul className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Collections", path: "/collections" },
                  { name: "Craftsmanship", path: "/craftsmanship" },
                  { name: "About", path: "/about" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-stone hover:text-navy transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-sans tracking-widest uppercase text-sage mb-6">Shop</p>
              <ul className="space-y-4">
                {[
                  { name: "Sheet Sets" },
                  { name: "Fitted Sheets" },
                  { name: "Pillowcases" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-stone hover:text-navy transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-sans tracking-widest uppercase text-sage mb-6">Connect</p>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-stone hover:text-navy transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:Econestexport@gmail.com"
                    className="text-sm text-stone hover:text-navy transition-colors duration-300 block"
                  >
                    Econestexport@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-taupe/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-stone">
            &copy; {currentYear} Econest Living. All rights reserved.
          </p>
          <p className="text-xs text-stone font-medium">
            100% Egyptian Cotton &bull; 1000 Thread Count
          </p>
        </div>
      </div>
    </footer>
  );
}

