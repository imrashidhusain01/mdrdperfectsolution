
import { useState } from "react";
import { X } from "lucide-react";

const galleryCategories = [
  {
    id: 1,
    title: "AC Repair & Service",
    images: [
      "/images/gallery/ac-repair1.jpg",
      "/images/gallery/ac-repair2.jpg",
      "/images/gallery/ac-repair3.jpg",
      "/images/gallery/ac-repair4.jpg",
      "/images/gallery/ac-repair5.jpg",
      "/images/gallery/ac-repair6.jpg",
    ],
  },
  {
    id: 2,
    title: "Washing Machine Repair",
    images: [
      "/images/gallery/Washing1.jpg",
      "/images/gallery/Washing2.jpg",
      "/images/gallery/Washing3.jpg",
      "/images/gallery/Washing4.jpg",
      "/images/gallery/Washing5.jpg",
      "/images/gallery/Washing6.jpg",
    ],
  },
  {
    id: 3,
    title: "Refrigerator Repair",
    images: [
      "/images/gallery/Refrigerator1.jpg",
      "/images/gallery/Refrigerator2.jpg",
      "/images/gallery/Refrigerator3.jpg",
      "/images/gallery/Refrigerator4.jpg",
      "/images/gallery/Refrigerator5.jpg",
      "/images/gallery/Refrigerator6.jpg",
    ],
  },
  {
    id: 4,
    title: "RO Water Purifier Repair",
    images: [
      "/images/gallery/rowater1.jpg",
      "/images/gallery/rowater2.jpg",
      "/images/gallery/rowater3.jpg",
      "/images/gallery/rowater4.jpg",
      "/images/gallery/rowater5.jpg",
      "/images/gallery/rowater6.jpg",
    ],
  },
  {
    id: 5,
    title: "Geyser Repair",
    images: [
      "/images/gallery/geyser1.jpg",
      "/images/gallery/geyser2.jpg",
      "/images/gallery/geyser3.jpg",
      "/images/gallery/geyser4.jpg",
      "/images/gallery/geyser5.jpg",
      "/images/gallery/geyser6.jpg",
    ],
  },
  {
    id: 6,
    title: "Kitchen Chimney Repair",
    images: [
      "/images/gallery/chimney1.jpg",
      "/images/gallery/chimney2.jpg",
      "/images/gallery/chimney3.jpg",
      "/images/gallery/chimney4.webp",
      "/images/gallery/chimney5.jpg",
      "/images/gallery/chimney6.jpg",
    ],
  },
  {
    id: 7,
    title: "False Ceiling",
    images: [
      "/images/gallery/ceiling1.jpg",
      "/images/gallery/ceiling2.jpg",
      "/images/gallery/ceiling3.jpg",
      "/images/gallery/ceiling4.jpg",
      "/images/gallery/ceiling5.jpg",
      "/images/gallery/ceiling6.jpg",
    ],
  },
  {
    id: 8,
    title: "Wooden Interior Work",
    images: [
      "/images/gallery/interior1.jpg",
      "/images/gallery/interior2.jpg",
      "/images/gallery/interior3.jpg",
      "/images/gallery/interior4.jpg",
      "/images/gallery/interior5.jpg",
      "/images/gallery/interior6.jpg",
    ],
  },
];

function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="gallery" className="bg-white px-4 py-12 sm:px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#082f55] sm:text-3xl">
            हमारी काम की झलक (Our Work Gallery)
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            हमारे द्वारा किए गए काम की कुछ तस्वीरें
          </p>
        </div>

        {/* Category Buttons: Mobile 1 Column, Desktop 2 Columns */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setPreviewImage(null);
              }}
              className="flex min-h-[54px] w-full items-center justify-center rounded-lg bg-[#082f55] px-4 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-green-700 sm:text-base"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Category Gallery Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 p-4 sm:p-8">

          {/* Close Gallery */}
          <button
            type="button"
            onClick={() => {
              setSelectedCategory(null);
              setPreviewImage(null);
            }}
            className="fixed right-4 top-4 z-[120] flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-red-600 hover:text-white"
            aria-label="Close gallery"
          >
            <X size={26} />
          </button>

          <div className="mx-auto max-w-7xl pt-14">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              {selectedCategory.title}
            </h2>

            {/* Gallery Images */}
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {selectedCategory.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setPreviewImage(image)}
                  className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-slate-200"
                >
                  <img
                    src={image}
                    alt={`${selectedCategory.title} ${index + 1}`}
                    loading="lazy"
                    className="h-auto w-full object-cover transition duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Full Image Preview */}
          {previewImage && (
            <div
              className="fixed inset-0 z-[130] flex items-center justify-center bg-black/95 p-4"
              onClick={() => setPreviewImage(null)}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white"
                aria-label="Close image preview"
              >
                <X size={26} />
              </button>

              <img
                src={previewImage}
                alt="Gallery preview"
                className="max-h-[85vh] max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default WorkGallery;
