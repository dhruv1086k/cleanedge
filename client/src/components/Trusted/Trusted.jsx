import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { assets } from "../../assets/assets";

export default function TrustedByThousands() {
  const cards = [
    {
      image: `${assets.trustedPeople1}`,
      title: "Trending on Instagram",
      subtitle: "CleanEdge",
    },
    {
      image: `${assets.trustedPeople2}`,
      title: "Change according to your mood",
      subtitle: "CleanEdge",
    },
    {
      image: `${assets.trustedPeople3}`,
      title: "Capture every moment",
      subtitle: "CleanEdge",
    },
    {
      image: `${assets.trustedPeople4}`,
      title: "Perfect for creators",
      subtitle: "CleanEdge",
    },
    {
      image: `${assets.trustedPeople5}`,
      title: "Stand out online",
      subtitle: "CleanEdge",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black uppercase">
          Trusted by <span
            className="before:content-[''] before:w-full before:h-full"
            style={{
              backgroundImage: `url(${assets.leaf})`,
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            Thousands
          </span>
        </h2>
        <div className="mt-10">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} 
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg shadow-lg overflow-hidden bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500">{card.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
