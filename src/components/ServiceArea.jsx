
import { useState } from "react";
import {
  MapPin,
  House,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Indirapuram",
    message:
      "MDRD Perfect Solution की टीम बहुत प्रोफेशनल है। AC की सर्विस जल्दी और अच्छी तरह हुई। अब घर के सभी काम इन्हीं से करवाते हैं।",
  },
  {
    name: "Amit Kumar",
    location: "Noida Sector 62",
    message:
      "बहुत अच्छी सर्विस मिली। टेक्नीशियन समय पर आए और काम भी अच्छी क्वालिटी का किया।",
  },
  {
    name: "Vikas Singh",
    location: "Ghaziabad",
    message:
      "Home appliances repair का काम बहुत अच्छा हुआ। कीमत भी उचित थी।",
  },
];

const serviceAreas = [
  "Noida Sector 62",
  "Indirapuram",
  "Ghaziabad",
  "Khora Colony",
  "Vaishali",
  "Vasundhara",
];

function ServiceArea() {
  const [showAreas, setShowAreas] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const review = reviews[activeReview];

  const previousReview = () => {
    setActiveReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setActiveReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-slate-50 px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">

        {/* SERVICE AREA CARD */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5 flex items-center gap-3">
            <MapPin className="shrink-0 text-[#0b477d]" size={25} />
            <h2 className="text-lg font-extrabold text-[#082f55] sm:text-xl">
              हमारा सेवा क्षेत्र (Service Area)
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_180px_1fr]">

            {/* LEFT INFORMATION */}
            <div>
              <div className="flex items-center gap-2">
                <MapPin size={21} className="shrink-0 text-[#0b477d]" />
                <h3 className="text-sm font-bold text-[#082f55]">
                  AC और Home Appliances के लिए:
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Noida Sector 62, Indirapuram और आसपास के क्षेत्र
                (15 km तक)
              </p>

              <button
                type="button"
                onClick={() => setShowAreas(!showAreas)}
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0b477d] px-4 py-2 text-xs font-bold text-[#0b477d] transition hover:bg-[#0b477d] hover:text-white"
              >
                {showAreas ? "लिस्ट बंद करें" : "पूरी लिस्ट देखें"}
                <ArrowRight size={14} />
              </button>
            </div>

            {/* MAP DESIGN */}
            <div className="relative mx-auto flex h-44 w-44 items-center justify-center">
              <div className="absolute h-40 w-40 rounded-full border-2 border-dashed border-slate-300" />
              <div className="absolute h-28 w-28 rounded-full border border-dashed border-blue-300" />
              <div className="absolute h-16 w-16 rounded-full bg-blue-50" />

              <div className="absolute left-2 top-10 text-[10px] font-bold text-blue-700">
                Noida
                <br />
                Sector 62
              </div>

              <div className="absolute bottom-5 right-0 text-[10px] font-bold text-green-700">
                Indirapuram
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <MapPin size={36} fill="#dc2626" className="text-red-600" />
              </div>

              <div className="absolute right-0 top-5 text-lg font-extrabold text-green-700">
                15 km
              </div>

              <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 rotate-[-35deg] bg-green-400" />
            </div>

            {/* RIGHT INFORMATION */}
            <div>
              <div className="flex items-center gap-2">
                <House size={22} className="shrink-0 text-[#0b477d]" />
                <h3 className="text-sm font-bold text-[#082f55]">
                  Interior Work के लिए:
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                All India (पूरे भारत में सेवा उपलब्ध)
              </p>

              <a
                href="https://wa.me/918085646555?text=Hello%20MDRD%20Perfect%20Solution%2C%20I%20need%20interior%20work%20information."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0b477d] px-4 py-2 text-xs font-bold text-[#0b477d] transition hover:bg-[#0b477d] hover:text-white"
              >
                अधिक जानकारी
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* EXPANDED SERVICE AREAS */}
          {showAreas && (
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="mb-3 font-bold text-[#082f55]">
                हमारे Service Areas
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-md bg-slate-50 p-3 text-sm text-slate-700"
                  >
                    <MapPin size={16} className="shrink-0 text-green-600" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CUSTOMER REVIEW CARD */}
        <div className="flex flex-col rounded-xl border border-slate-200 bg-[#edf5fc] p-5 shadow-sm sm:p-6">

          <div className="mb-4 flex items-center gap-3">
            <Quote size={27} className="shrink-0 text-[#0b477d]" />
            <h2 className="text-lg font-extrabold text-[#082f55]">
              ग्राहक क्या कहते हैं?
            </h2>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <p className="min-h-24 text-sm leading-7 text-slate-600">
              "{review.message}"
            </p>

            <div className="mt-4">
              <p className="text-sm font-extrabold text-[#082f55]">
                – {review.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {review.location}
              </p>
            </div>

            {/* REVIEW CONTROLS */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={previousReview}
                aria-label="Previous review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 text-[#082f55] transition hover:bg-[#082f55] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveReview(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeReview === index
                        ? "w-5 bg-blue-700"
                        : "w-2.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 text-[#082f55] transition hover:bg-[#082f55] hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServiceArea;
