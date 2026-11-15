
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#062d50] px-5 py-10 text-white sm:px-8">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.5fr_1.3fr_0.8fr]">

        {/* Company Logo */}
        <div>
          <Link to="/">
            <img
              src="/images/logo/logo.png"
              alt="MDRD Perfect Solution"
              className="w-44 object-contain sm:w-48"
            />
          </Link>

          <p className="mt-3 text-sm text-slate-300">
            Your Comfort | Our Priority
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-green-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400">About Us</Link>
              </li>
              <li>
                <Link to="/imageGallery" className="hover:text-green-400">Image Gallery</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-green-400">AC Repair</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-green-400">Home Appliances</Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="hover:text-green-400">Interior Work</Link>
              </li>
              <li>
                <Link to="/#gallery" className="hover:text-green-400">Work Gallery</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-green-400">Geyser</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-green-400">Kitchen Chimney</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-green-400">Contact Us</Link>
              </li>
            </ul>

          </div>
        </div>

        {/* Contact Us */}
        <div className="border-t border-slate-600 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-slate-600 lg:pl-7">

          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>

          <div className="space-y-4 text-sm text-slate-300">

            <a
              href="tel:8368593966"
              className="flex items-center gap-3 hover:text-green-400"
            >
              <span>☎</span>
              <span>8368593966</span>
            </a>

            <div className="flex items-start gap-3">
              <span>📍</span>
              <span>Indirapuram, Kala Patthar Road, Nayak Khand 2</span>
            </div>

            <a
              href="mailto:mdrdperfectsolution@gmail.com"
              className="flex items-start gap-3 break-all hover:text-green-400"
            >
              <span>✉</span>
              <span>mdrdperfectsolution@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <span>◷</span>
              <span>9:00 AM - 9:00 PM (All Days)</span>
            </div>

          </div>
        </div>

        {/* Follow Us */}
        <div className="border-t border-slate-600 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-slate-600 lg:pl-7">

          <h3 className="mb-5 text-lg font-bold">Follow Us</h3>

          <div className="flex items-center gap-3">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-bold text-white transition hover:bg-blue-600"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white transition hover:bg-pink-700"
            >
              ◎
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
            >
              ▶
            </a>

            <a
              href="https://wa.me/918368593966"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-600"
            >
              ◉
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-600 pt-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} MDRD Perfect Solution. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
