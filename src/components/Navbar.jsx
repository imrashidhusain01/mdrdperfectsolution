
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/imageGallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center"
        >
          <img
            src="/images/logo/logo.png"
            alt="MDRD Perfect Solution"
            className="h-12 w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[280px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`whitespace-nowrap border-b-2 py-2 font-semibold transition ${
                location.pathname === link.href
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-[#062d50] hover:border-green-600 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#062d50] hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 bg-white px-5 py-3 shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-slate-100 px-2 py-4 font-semibold text-[#062d50] transition hover:bg-green-50 hover:text-green-600 last:border-b-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
