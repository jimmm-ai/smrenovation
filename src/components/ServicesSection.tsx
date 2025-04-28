import { Phone } from "lucide-react";
import { translations } from "../translations";
import { serviceProjects } from "../data/serviceProjects";
import { serviceGroups } from "../data/serviceGroups";
import { getServiceIcon } from "./ServiceIcons";
import ServiceSection from "./ServiceSection";
import { Language } from "./Header";

type TranslationType = (typeof translations)[Language];
type ServiceGroupTitles = TranslationType["serviceGroupTitles"];

interface ServicesSectionProps {
  t: TranslationType;
  phoneNumber: string;
}

export default function ServicesSection({
  t,
  phoneNumber,
}: ServicesSectionProps) {
  const groupOrder: (keyof ServiceGroupTitles)[] = [
    "toiture",
    "murs",
    "dallages",
    "boiseries",
  ];

  // Compteur global pour suivre l'alternance des services
  let serviceCounter = 0;

  return (
    <div id="services" className="py-12 md:py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl md:max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title inline-block">{t.servicesTitle}</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base md:text-xl">
            {t.servicesSubtitle}
          </p>
        </div>
      </div>

      {/* Service Sections sans les titres de famille */}
      <div className="space-y-0">
        {groupOrder.map((groupName) => {
          const serviceIds = serviceGroups[groupName];
          const servicesInGroup = t.services.filter((service) =>
            serviceIds.includes(service.id)
          );

          if (!servicesInGroup.length) {
            return null;
          }

          return (
            <div key={groupName} className="w-full">
              {servicesInGroup.map((service) => {
                // Utilisons le compteur global pour l'alternance
                const isEven = serviceCounter % 2 !== 0;
                serviceCounter++; // Incrémentons le compteur après chaque service

                return (
                  <ServiceSection
                    key={service.id}
                    service={service}
                    isEven={isEven}
                    phoneNumber={phoneNumber}
                    freeQuoteText={t.freeQuote}
                    serviceIcon={getServiceIcon(
                      service.id,
                      "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    )}
                    projects={
                      serviceProjects[
                        service.id as keyof typeof serviceProjects
                      ]
                    }
                    beforeLabel={t.beforeLabel}
                    afterLabel={t.afterLabel}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="max-w-6xl md:max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-blue-50 p-6 rounded-lg mt-16 shadow-sm border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {t.customServiceTitle}
              </h3>
              <p className="text-blue-800/80 text-sm sm:text-base">
                {t.customServiceText}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>{phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
