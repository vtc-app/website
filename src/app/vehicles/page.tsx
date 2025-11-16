"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VehiclesPage() {
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
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <p className="text-primary-light font-semibold uppercase tracking-wider text-sm mb-3">
              {t("vehicles.subtitle")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("vehicles.title")}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("vehicles.description")}
            </p>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden [&_.swiper-button-next]:text-white [&_.swiper-button-next]:bg-black/50 [&_.swiper-button-next]:w-8 [&_.swiper-button-next]:h-8 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:hover:bg-black/70 [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:bg-black/50 [&_.swiper-button-prev]:w-8 [&_.swiper-button-prev]:h-8 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:hover:bg-black/70 [&_.swiper-button-next:after]:text-sm [&_.swiper-button-prev:after]:text-sm [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-secondary [&_.swiper-pagination-bullet-active]:opacity-100">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      className="h-full w-full"
                    >
                      {vehicle.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <Image
                            src={image}
                            alt={`${vehicle.name} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
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

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {t("vehicles.features")}:
                      </h4>
                      <div className="space-y-2">
                        {vehicle.features.map((feature, featureIndex) => (
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
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="block w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                    >
                      {t("vehicles.bookVehicle")}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">
                {t("vehicles.maintenance")}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("vehicles.whyChoose")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("vehicles.premiumQuality")}
                </h3>
                <p className="text-gray-600">
                  {t("vehicles.premiumQualityDesc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("vehicles.fullInsurance")}
                </h3>
                <p className="text-gray-600">
                  {t("vehicles.fullInsuranceDesc")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("vehicles.maxComfort")}
                </h3>
                <p className="text-gray-600">{t("vehicles.maxComfortDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("vehicles.bookNow")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("vehicles.bookNowDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0486123456"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                04 86 12 34 56
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                {t("vehicles.requestQuote")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
