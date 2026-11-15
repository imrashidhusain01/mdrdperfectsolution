
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WorkGallery from "../components/WorkGallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import ServiceArea from "../components/ServiceArea";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <WorkGallery />

        <ServiceArea />

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />

      <WhatsAppButton />
      <CallButton />
    </>
  );
}

export default Home;
