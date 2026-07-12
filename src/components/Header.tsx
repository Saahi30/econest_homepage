import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Collections", path: "/collections" },
  { name: "Craftsmanship", path: "/craftsmanship" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-cream/95 backdrop-blur-md py-4 shadow-sm shadow-navy/5"
          : "bg-cream/70 backdrop-blur-sm py-6"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="Econest Living"
              className="h-16 md:h-20 w-auto transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-navy/75 hover:text-navy transition-all duration-300 relative"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-[0.2em] uppercase rounded-full border border-navy px-5 py-2.5 text-navy hover:bg-navy hover:text-cream transition-all duration-300"
            >
              Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-[1px] bg-current transition-all duration-300 origin-center",
                  mobileOpen && "rotate-45 translate-y-[3.5px]"
                )}
              />
              <span
                className={cn(
                  "block h-[1px] bg-current transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-[1px] bg-current transition-all duration-300 origin-center",
                  mobileOpen && "-rotate-45 -translate-y-[3.5px]"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-cream transition-all duration-500",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container-full pt-16 pb-8">
          <div className="space-y-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-2xl font-display text-navy"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.amazon.com/stores/ECONESTLIVING/page/EC573A51-FF95-41D1-AA80-7BFC20F7F6B4"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-display text-navy"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
