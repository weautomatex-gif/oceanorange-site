"use client";

import Image from "next/image";

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Tropical beach sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Sea turtle underwater",
  },
  {
    src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&q=80",
    alt: "Ocean sunset golden",
  },
  {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    alt: "Underwater blue light",
  },
  {
    src: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=800&q=80",
    alt: "Crashing wave",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    alt: "Calm ocean surface",
  },
  {
    src: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
    alt: "Dramatic sunset sky",
  },
  {
    src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80",
    alt: "Coastal cliffs",
  },
];

export default function ImageSlider() {
  // Duplicate for seamless infinite loop
  const duplicated = [...sliderImages, ...sliderImages];

  return (
    <div className="w-full overflow-hidden py-8 md:py-12">
      <div className="scroll-container w-full">
        <div className="infinite-scroll flex gap-4 md:gap-6 w-max">
          {duplicated.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
