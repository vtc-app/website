"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VehiclesSection() {
  const { t } = useTranslation("common");

  const vehicles = [
    {
      name: "Toyota Corolla Hybrid",
      driver: "Anis Ouerghi",
      images: [
        "/img/cars/Toyota Corolla Hybrid 2023/image1.png",
        "/img/cars/Toyota Corolla Hybrid 2023/image2.png",
        "/img/cars/Toyota Corolla Hybrid 2023/image3.jpeg",
        "/img/cars/Toyota Corolla Hybrid 2023/image4.jpeg",
      ],
      passengers: 4,
      luggage: 3,
      category: "Hybrid Sedan",
      features: [
        "Eco-friendly",
        "Air Conditioning",
        "GPS",
        "WiFi",
        "Leather Seats",
      ],
    },
    {
      name: "Hyundai Ioniq 5",
      driver: "Azidine Zigham",
      images: [
        "/img/cars/Hyundai Ioniq 5 2021/image1.png",
        "/img/cars/Hyundai Ioniq 5 2021/image2.png",
        "/img/cars/Hyundai Ioniq 5 2021/image3.png",
        "/img/cars/Hyundai Ioniq 5 2021/image4.png",
        "/img/cars/Hyundai Ioniq 5 2021/image5.png",
      ],
      passengers: 5,
      luggage: 2,
      category: "Electric SUV",
      features: [
        "100% Electric",
        "Fast Charging",
        "GPS",
        "WiFi",
        "Premium Sound",
      ],
    },
    {
      name: "Hyundai Ioniq Hybrid",
      driver: "Djamel mechia",
      images: [
        "/img/cars/Hyundai Ioniq 2021/image1.png",
        "/img/cars/Hyundai Ioniq 2021/image2.png",
        "/img/cars/Hyundai Ioniq 2021/image3.jpg",
      ],
      passengers: 5,
      luggage: 3,
      category: "Hybrid Sedan",
      features: [
        "Eco-friendly",
        "Air Conditioning",
        "GPS",
        "WiFi",
        "Comfort Seats",
      ],
    },
    {
      name: "Toyota CH-R",
      driver: "Riadh Zigham",
      images: [
        "/img/cars/Toyota ch-r/image1.png",
        "/img/cars/Toyota ch-r/image2.png",
        "/img/cars/Toyota ch-r/image3.jpeg",
        "/img/cars/Toyota ch-r/image4.jpeg",
      ],
      passengers: 5,
      luggage: 2,
      category: "Compact SUV",
      features: [
        "Eco-friendly",
        "Air Conditioning",
        "GPS",
        "WiFi",
        "Modern Design",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="vehicles">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            {t("vehicles.subtitle")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("vehicles.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("vehicles.description")}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden [&_.swiper-pagination-bullet]:bg-black [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-secondary [&_.swiper-pagination-bullet-active]:opacity-100">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="h-full w-full"
                >
                  {vehicle.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={image}
                        alt={`${vehicle.name} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {vehicle.driver}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {vehicle.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="font-semibold">{vehicle.passengers}</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {t("vehicles.passengers")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-semibold">{vehicle.luggage}</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {t("vehicles.luggage")}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {vehicle.features.slice(0, 3).map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden [&_.swiper-button-next]:text-black [&_.swiper-button-next]:bg-white/80 [&_.swiper-button-next]:w-8 [&_.swiper-button-next]:h-8 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:text-black [&_.swiper-button-prev]:bg-white/80 [&_.swiper-button-prev]:w-8 [&_.swiper-button-prev]:h-8 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next:after]:text-sm [&_.swiper-button-prev:after]:text-sm [&_.swiper-pagination-bullet]:bg-black [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-secondary [&_.swiper-pagination-bullet-active]:opacity-100">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="pb-12"
          >
            {vehicles.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-56 overflow-hidden [&_.swiper-pagination-bullet]:bg-black [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-secondary [&_.swiper-pagination-bullet-active]:opacity-100">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="h-full w-full"
                    >
                      {vehicle.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <Image
                            src={image}
                            alt={`${vehicle.name} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {vehicle.driver}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {vehicle.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 mr-2 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="font-semibold">
                          {vehicle.passengers}
                        </span>
                        <span className="ml-1 text-sm text-gray-600">
                          {t("vehicles.passengers")}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 mr-2 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span className="font-semibold">{vehicle.luggage}</span>
                        <span className="ml-1 text-sm text-gray-600">
                          {t("vehicles.luggage")}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {vehicle.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            {t("vehicles.maintenance")}
          </p>
          <Link
            href="/vehicles"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {t("vehicles.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
