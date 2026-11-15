
import { useState } from "react";
import {
  Snowflake,
  Refrigerator,
  House,
  CheckCircle2,
  ArrowRight,
  X,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "AC Repair & Service",
    hindi: "सभी प्रकार के AC की रिपेयरिंग और सर्विस",
    image: "/images/services/ac-repair.jpg",
    color: "blue",
    icon: Snowflake,
    description:
      "Professional AC repair and maintenance services at your doorstep.",
    items: [
      "Split AC Repair & Service",
      "Window AC Repair & Service",
      "AC Installation & Uninstallation",
      "AC Gas Charging",
      "AC General Service & Cleaning",
    ],
  },
  {
    id: 2,
    title: "Home Appliances Repair",
    hindi: "सभी घरेलू उपकरणों की रिपेयरिंग",
    image: "/images/services/appliances.jpg",
    color: "green",
    icon: Refrigerator,
    description:
      "Complete home appliance repair and maintenance solutions.",
    items: [
      "Washing Machine Repair",
      "Refrigerator Repair",
      "RO Water Purifier Repair",
      "Geyser Repair",
      "Kitchen Chimney Repair",
    ],
  },
  {
    id: 3,
    title: "Interior Work",
    hindi: "आपके घर और ऑफिस के लिए सुंदर इंटीरियर",
    image: "/images/interior/interior-1.jpg",
    color: "orange",
    icon: House,
    description:
      "Modern interior design and wooden work solutions.",
    items: [
      "Wooden Work",
      "False Ceiling",
      "Modular Kitchen & Wardrobe",
      "Home & Office Interior",
      "Design & Execution",
    ],
  },
];

function Services() {
  const [selected, setSelected] = useState(null);

  const colorClasses = {
    blue: "bg-blue-700",
    green: "bg-green-700",
    orange: "bg-amber-800",
  };

  const sendWhatsApp = (service) => {
    const message = encodeURIComponent(
      `Hello MDRD Perfect Solution, I want details about ${service.title}.`
    );

    window.open(
      `https://wa.me/918368593966?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="services" className="bg-white px-4 py-12 scroll-mt-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#082f55] sm:text-3xl">
            हमारी सेवाएं (Our Services)
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            आपकी हर जरूरत के लिए भरोसेमंद और प्रोफेशनल सर्विस
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setSelected(service)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(service);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Service Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className={`absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white shadow ${colorClasses[service.color]}`}
                  >
                    <Icon size={25} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">

                  <h3 className="text-lg font-extrabold text-[#083c70]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {service.hindi}
                  </p>

                  <div className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-green-600"
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white ${colorClasses[service.color]}`}
                  >
                    View Details
                    <ArrowRight size={17} />
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Details Popup */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-heading"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow"
              aria-label="Close popup"
            >
              <X size={23} />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="h-56 w-full bg-slate-100 object-cover"
            />

            <div className="p-6">

              <h2
                id="service-heading"
                className="text-2xl font-extrabold text-[#082f55]"
              >
                {selected.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {selected.description}
              </p>

              <h3 className="mt-5 font-bold text-slate-900">
                Available Services
              </h3>

              <div className="mt-3 space-y-3">
                {selected.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => sendWhatsApp(selected)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Enquire on WhatsApp
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Services;
