"use client";

import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  MainPrimaryShape,
  SecondaryBlackShape,
  TopRightAccentShape,
  MiddleRightAccentShape,
} from "@/Components/HeroSection/BackgroundShapes";
import {
  TopRightDotsPattern,
  BottomLeftDotsPattern,
  ScatteredDotsPattern,
} from "@/Components/HeroSection/DecorativeDots";
import {
  DocumentIcon,
  StarIcon,
  UserIcon,
  ClockIcon,
} from "@/Components/HeroSection/StatCardIcons";
import { TextBackgroundShapes } from "@/Components/HeroSection/TextBackgroundShapes";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white md:pt-16 pt-8 pb-16 overflow-hidden relative">
      <div className="container mx-auto w-full flex flex-col gap-8 md:flex-row items-center justify-between px-6 lg:px-10">
        {/* Right Visual Section - Show first on mobile */}
        <div className="relative lg:w-[54%] w-full max-w-[600px] h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden order-1 md:order-2">
          {/* Background Organic Shapes - Primary Black */}
          <div className="absolute inset-0 overflow-visible">
            <MainPrimaryShape />
            <SecondaryBlackShape />
            <TopRightAccentShape />
            <MiddleRightAccentShape />
            <TopRightDotsPattern />
            <BottomLeftDotsPattern />
            <ScatteredDotsPattern />
          </div>

          {/* Hyundai Ioniq 5 Car Image - Proportionally Sized */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full md:max-w-[550px] md:max-h-[450px] md:transform md:translate-x-4">
              <Image
                src="/img/hyundai-ioniq-5.webp"
                alt="Hyundai Ioniq 5 VTC Premium Service"
                className="object-contain drop-shadow-2xl"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>
          </div>

          {/* Floating Stat Cards - Hidden on small screens */}
          {/* Top Left Card */}
          <div className="hidden md:block absolute top-6 left-2 md:top-8 md:left-4 bg-white rounded-xl shadow-lg p-3 z-20 animate-bounce-vertical">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <DocumentIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {t("hero.stats.projects")}
                </p>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div
            className="hidden md:block absolute top-12 right-4 md:top-16 md:right-8 bg-white rounded-xl shadow-lg p-4 z-20 animate-bounce-vertical border-2 border-secondary/20"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <StarIcon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  <span className="text-secondary">
                    {t("hero.stats.satisfaction")}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div
            className="hidden md:block absolute bottom-12 right-4 md:bottom-16 md:right-8 bg-white rounded-xl shadow-lg p-4 z-20 animate-bounce-vertical"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {t("hero.stats.experience")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Content - Show second on mobile */}
        <div className="relative space-y-6 lg:w-[46%] md:min-w-96 min-w-full z-10 order-2 md:order-1">
          <TextBackgroundShapes />

          {/* Content */}
          <div className="relative space-y-6">
            <p className="text-gray-600 text-base md:text-lg font-medium">
              {t("hero.greeting")}
            </p>

            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-gray-900 leading-tight">
              <span className="text-primary">{t("hero.title")}</span>{" "}
              <span className="text-secondary">{t("hero.titleHighlight")}</span>{" "}
              <span className="text-primary">{t("hero.subtitle")}</span>
            </h1>

            <p className="text-gray-600 xl:text-lg lg:text-base text-sm font-medium leading-relaxed">
              Service VTC{" "}
              <span className="text-secondary font-semibold">
                professionnel
              </span>{" "}
              à <span className="text-secondary font-semibold">Marseille</span>{" "}
              et région PACA.{" "}
              <span className="text-secondary font-semibold">
                Transferts aéroport
              </span>
              , courses urbaines, événements privés. Véhicules{" "}
              <span className="text-secondary font-semibold">
                haut de gamme
              </span>
              , chauffeurs expérimentés, disponible{" "}
              <span className="text-secondary font-semibold">24h/24</span>.
            </p>

            <div className="space-y-4">
              <CustomButton href={"/contact"}>{t("hero.cta")}</CustomButton>
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">
                  {t("hero.availability")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
