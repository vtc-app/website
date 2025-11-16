"use client";

import Image from "next/image";
import {
  TruckIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  image: string;
  subservices: string[];
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <a
      href={service.link}
      className="group rounded-2xl bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/30 block cursor-pointer"
    >
      <div className="flex">
        {/* Image section - Left side */}
        <div className="w-1/3 relative min-h-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content section - Right side */}
        <div className="w-2/3 p-4 lg:p-8 flex flex-col justify-between min-h-full">
          {/* Main content */}
          <div>
            {/* Header with numbered icon and title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                {service.name}
              </h3>
            </div>

            {/* Description - Limited to 2 lines */}
            <p
              className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {service.description}
            </p>

            {/* Subservices - Display 1-2 subservices in one row */}
            {service.subservices && service.subservices.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.subservices.slice(0, 2).map((subservice, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center p-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {subservice}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action button - positioned at bottom */}
          <div className="flex gap-2 mt-auto">
            <span className="px-3 py-1.5 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ServicesSection() {
  const { t } = useTranslation("common");

  const services = [
    {
      name: t("services.cityTransport.name"),
      description: t("services.cityTransport.description"),
      icon: MapPinIcon,
      link: "/services/city",
      image: "/img/cityTransport.jpg",
      subservices: t("services.cityTransport.subservices", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.airportTransfer.name"),
      description: t("services.airportTransfer.description"),
      icon: TruckIcon,
      link: "/services/airport",
      image: "/img/airport.jpg",
      subservices: t("services.airportTransfer.subservices", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.businessTransport.name"),
      description: t("services.businessTransport.description"),
      icon: BuildingOfficeIcon,
      link: "/services/business",
      image: "/img/businessTransport.jpg",
      subservices: t("services.businessTransport.subservices", {
        returnObjects: true,
      }) as string[],
    },

    {
      name: t("services.touristTransport.name"),
      description: t("services.touristTransport.description"),
      icon: CameraIcon,
      link: "/services/tours",
      image: "/img/touristTransport1.jpg",
      subservices: t("services.touristTransport.subservices", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section className="container  mx-auto bg-gray-50 pt-12 lg:py-16">
      <div className=" mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid - Swipeable on mobile */}
        <div className="hidden lg:block space-y-6">
          {/* First row: 2 services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </div>

          {/* Second row: 2 services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.slice(2, 4).map((service, index) => (
              <ServiceCard
                key={service.name}
                service={service}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        {/* Swiper for mobile */}
        <div className="lg:hidden [&_.swiper-button-next]:text-black [&_.swiper-button-next]:bg-white/80 [&_.swiper-button-next]:w-8 [&_.swiper-button-next]:h-8 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:text-black [&_.swiper-button-prev]:bg-white/80 [&_.swiper-button-prev]:w-8 [&_.swiper-button-prev]:h-8 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next:after]:text-sm [&_.swiper-button-prev:after]:text-sm [&_.swiper-pagination-bullet]:bg-black [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-secondary [&_.swiper-pagination-bullet-active]:opacity-100">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.name}>
                <ServiceCard service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
