"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/Components/Button/CustomButton";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  const services = [
    {
      name: t("services.airportTransfer.name"),
      href: "/services/airport",
    },
    {
      name: t("services.businessTransport.name"),
      href: "/services/business",
    },
    {
      name: t("services.cityTransport.name"),
      href: "/services/city",
    },
    {
      name: t("services.touristTransport.name"),
      href: "/services/tours",
    },
  ];

  return (
    <footer className="bg-faint py-12">
      <div className="mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="block h-8 w-fit">
            <Image
              src="/img/logos/logo_white.png"
              alt="MassiliaDrive Logo"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <p className="text-sm max-w-xs mt-2">{t("footer.description")}</p>
          <div className="pt-2">
            <CustomButton href="/contact">{t("footer.contactUs")}</CustomButton>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm">
            {services.map(item => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className="hover:text-primary">
                {t("footer.vehicles")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-16">
        <p className="text-gray-600">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me"
            className="hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
