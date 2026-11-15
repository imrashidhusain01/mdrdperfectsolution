
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const points = [
    "AC Repair & Service",
    "Home Appliances Repair",
    "Interior Work",
    "Customer-focused Service",
  ];

  return (
    <>
      <Navbar />

      <section
        id="about"
        className="bg-slate-50 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

          {/* About Image */}
          <div>
            <img
              src="/images/contact-banner.png"
              alt="MDRD Perfect Solution home service"
              className="h-[320px] w-full rounded-2xl object-cover shadow-lg md:h-[420px]"
            />
          </div>

          {/* About Content */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-green-600">
              About Our Company
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#062d50] sm:text-4xl">
              Welcome to MDRD Perfect Solution
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              MDRD Perfect Solution provides AC repair, home appliance
              repair and interior work services. Our goal is to provide
              quality work and a smooth service experience to customers.
            </p>

            {/* Services List */}
            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle
                    className="shrink-0 text-green-600"
                    size={20}
                  />
                  <span className="font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Button */}
       <Link
  to="/#contact"
  className="mt-8 inline-block rounded-lg bg-[#062d50] px-7 py-3 font-semibold text-white transition hover:bg-green-600"
>
  Contact Us
</Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
