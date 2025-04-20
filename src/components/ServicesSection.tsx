import { Phone } from "lucide-react";
import { translations } from "../translations";
import { serviceProjects } from "../data/serviceProjects";
import { serviceGroups } from "../data/serviceGroups";
import { getServiceIcon } from "./ServiceIcons";
import ServiceSection from "./ServiceSection";
import { Language } from "./Header";

type TranslationType = (typeof translations)[Language];
type ServiceGroupTitles = TranslationType["serviceGroupTitles"];
type ServiceGroupDescriptions = TranslationType["serviceGroupDescriptions"];

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

  return (
    <div id="services" className="py-12 md:py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title inline-block">{t.servicesTitle}</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base md:text-xl">
            {"Découvrez nos services de rénovation professionnels"}
          </p>
        </div>

        {/* Service Sections ordonnées par groupe */}
        <div className="space-y-16 md:space-y-24">
          {groupOrder.map((groupName) => {
            const serviceIds = serviceGroups[groupName];
            const groupTitle = t.serviceGroupTitles?.[groupName];
            const servicesInGroup = t.services.filter((service) =>
              serviceIds.includes(service.id)
            );

            if (!servicesInGroup.length || !groupTitle) {
              return null;
            }

            const groupDescription =
              t.serviceGroupDescriptions?.[
                groupName as keyof ServiceGroupDescriptions
              ];

            return (
              <div key={groupName}>
                <div className="mb-8 md:mb-12 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                    {groupTitle}
                  </h3>
                  {groupDescription && (
                    <p className="mt-2 text-gray-600 max-w-2xl md:max-w-none mx-auto md:mx-0 text-base md:text-lg">
                      {groupDescription}
                    </p>
                  )}
                  <hr className="mt-4 border-blue-200 w-24 mx-auto md:mx-0" />
                </div>

                <div className="space-y-10 md:space-y-16">
                  {servicesInGroup.map((service, index) => (
                    <ServiceSection
                      key={service.id}
                      service={service}
                      isEven={index % 2 !== 0}
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-16 shadow-sm border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Besoin d'un service personnalisé?
              </h3>
              <p className="text-blue-800/80 text-sm sm:text-base">
                Nous sommes là pour répondre à toutes vos questions. Devis et
                déplacement gratuit.
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
