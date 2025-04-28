import { Phone, CheckCircle } from "lucide-react";
import { ImageProject } from "./ImageCarousel";
import ImageCarousel from "./ImageCarousel";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description?: string;
    bulletPoints?: readonly string[];
  };
  isEven: boolean;
  phoneNumber: string;
  freeQuoteText: string;
  serviceIcon: React.ReactNode;
  projects: ImageProject[];
  beforeLabel: string;
  afterLabel: string;
}

export default function ServiceSection({
  service,
  isEven,
  phoneNumber,
  freeQuoteText,
  serviceIcon,
  projects,
  beforeLabel,
  afterLabel,
}: ServiceProps) {
  return (
    <div
      id={service.id}
      className={`scroll-mt-28 py-12 sm:py-16 md:py-20 relative w-full ${
        isEven ? "" : "bg-blue-50/80"
      }`}
    >
      {/* Section content */}
      <div className="max-w-6xl md:max-w-7xl lg:max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } gap-10 md:gap-16 items-center`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 space-y-4 md:space-y-6">
            <div className="flex items-start gap-5">
              <div
                className={`${
                  isEven ? "bg-blue-50" : "bg-white"
                } p-3 sm:p-4 rounded-xl text-blue-600 flex items-center justify-center shadow-md`}
              >
                {serviceIcon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.id === "renovation-toiture" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Nettoyage
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Peinture
                      </span>
                    </>
                  )}
                  {service.id === "nettoyage-murs" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Traitement
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Hydrofuge
                      </span>
                    </>
                  )}
                  {service.id === "ravalement-facade" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Réparation
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Finition
                      </span>
                    </>
                  )}
                  {service.id === "renovation-mur" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Nettoyage
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Réparation
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Peinture
                      </span>
                    </>
                  )}
                  {service.id === "nettoyage-dallages" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Décapage
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Rejointoiement
                      </span>
                    </>
                  )}
                  {service.id === "renovation-boiserie" && (
                    <>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Ponçage
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                        Protection
                      </span>
                    </>
                  )}
                </div>
                <div className="h-0.5 w-16 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              {service.description ||
                "Nous proposons des services professionnels pour répondre à tous vos besoins."}
            </p>

            {service.bulletPoints && service.bulletPoints.length > 0 && (
              <ul className="space-y-3 text-gray-600">
                {service.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-base md:text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-4 flex flex-col items-start">
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>{phoneNumber}</span>
              </a>
              <div className="text-gray-700 font-medium mt-3">
                {freeQuoteText}
              </div>
            </div>
          </div>

          {/* Images Carousel */}
          <div className="w-full md:w-1/2">
            <ImageCarousel
              images={projects}
              beforeLabel={beforeLabel}
              afterLabel={afterLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
