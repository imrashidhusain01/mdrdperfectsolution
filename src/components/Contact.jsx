
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Apna WhatsApp number yahan country code ke saath daalein
    const whatsappNumber = "918368593966";

    const message = `Hello MDRD Perfect Solution,
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#062d50] sm:text-4xl">
            Get In Touch With Us
          </h2>
          <p className="mt-3 text-slate-600">
            Have a service requirement? Send us your enquiry.
          </p>
        </div>

        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#062d50]">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-500">Add your phone number</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-green-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-500">Add your email address</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-600" />
                <div>
                  <p className="font-semibold">Service Location</p>
                  <p className="text-slate-500">Add your business address</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-600" />
                <div>
                  <p className="font-semibold">WhatsApp Enquiry</p>
                  <p className="text-slate-500">
                    Send your service request directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="mb-4 text-2xl font-bold text-[#062d50]">
              Send Enquiry
            </h3>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            >
              <option value="">Select Service</option>
              <option value="AC Repair">AC Repair & Service</option>
              <option value="Appliance Repair">Home Appliances Repair</option>
              <option value="Interior Work">Interior Work</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your requirement"
              rows="4"
              className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-green-600"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <Send size={18} />
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
