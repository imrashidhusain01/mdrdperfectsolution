
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ImageGallery() {
  const images = [
    "/images/gallery/ac-repair1.jpg",
    "/images/gallery/Washing1.jpg",
    "/images/gallery/Refrigerator1.jpg",
    "/images/gallery/rowater1.jpg",
    "/images/gallery/geyser1.jpg",
    "/images/gallery/chimney1.jpg",
    "/images/gallery/ceiling1.jpg",
    "/images/gallery/interior1.jpg",
    "/images/gallery/ac-repair2.jpg",
    "/images/gallery/Washing2.jpg",
    "/images/gallery/Refrigerator2.jpg",
    "/images/gallery/rowater2.jpg",
    "/images/gallery/geyser2.jpg",
    "/images/gallery/chimney2.jpg",
    "/images/gallery/ceiling2.jpg",
    "/images/gallery/interior2.jpg",
    "/images/gallery/ac-repair3.jpg",
    "/images/gallery/Washing3.jpg",
    "/images/gallery/Refrigerator3.jpg",
    "/images/gallery/rowater3.jpg",
    "/images/gallery/geyser3.jpg",
    "/images/gallery/chimney3.jpg",
    "/images/gallery/ceiling3.jpg",
    "/images/gallery/interior3.jpg",
    "/images/gallery/ac-repair4.jpg",
    "/images/gallery/Washing4.jpg",
    "/images/gallery/Refrigerator4.jpg",
    "/images/gallery/rowater4.jpg",
    "/images/gallery/geyser4.jpg",
    "/images/gallery/chimney4.webp",
    "/images/gallery/ceiling4.jpg",
    "/images/gallery/interior4.jpg",
    "/images/gallery/ac-repair5.jpg",
    "/images/gallery/Washing5.jpg",
    "/images/gallery/Refrigerator5.jpg",
    "/images/gallery/rowater5.jpg",
    "/images/gallery/geyser5.jpg",
    "/images/gallery/chimney5.jpg",
    "/images/gallery/ceiling5.jpg",
    "/images/gallery/interior5.jpg",
    "/images/gallery/ac-repair6.jpg",
    "/images/gallery/Washing6.jpg",
    "/images/gallery/Refrigerator6.jpg",
    "/images/gallery/rowater6.jpg",
    "/images/gallery/geyser6.jpg",
    "/images/gallery/chimney6.jpg",
    "/images/gallery/ceiling6.jpg",
    "/images/gallery/interior6.jpg",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-green-600">
              Our Work
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#062d50] sm:text-4xl">
              Image Gallery
            </h1>

            <p className="mt-3 text-slate-600">
              Take a look at our recent work and services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-white shadow-md"
              >
                <img
                  src={image}
                  alt={`MDRD Perfect Solution work ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ImageGallery;
