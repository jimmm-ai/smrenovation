import { ImageProject } from "../components/ImageCarousel";

// Service project data for before/after examples
export const serviceProjects: Record<string, ImageProject[]> = {
  // Renovation toiture - All images horizontal, last one repeated
  "renovation-toiture": [
    {
      before: "/images/Toit-1-sal.webp",
      after: "/images/Toit-1-propre.webp",
      description:
        "Rénovation complète d'une toiture endommagée par les intempéries",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-2-sal.webp",
      after: "/images/Toit-2-propre.webp",
      description: "Remplacement des tuiles cassées et traitement anti-mousse",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-3-sal.webp",
      after: "/images/Toit-3-sal-1.webp",
      description: "Étanchéification d'une toiture en ardoise",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-4-sal.webp",
      after: "/images/Toit-4-sal-1.webp",
      description: "Traitement de toiture contre les mousses et lichens",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
  ],
  // Peinture toiture - Same images as renovation-toiture
  "peinture-toiture": [
    {
      before: "/images/Toit-1-sal.webp",
      after: "/images/Toit-1-propre.webp",
      description:
        "Application d'une peinture protectrice sur toiture en tuiles",
      orientation: "landscape",
      serviceType: "Peinture de toiture",
    },
    {
      before: "/images/Toit-2-sal.webp",
      after: "/images/Toit-2-propre.webp",
      description:
        "Rénovation esthétique par peinture sur toiture en fibrociment",
      orientation: "landscape",
      serviceType: "Peinture de toiture",
    },
    {
      before: "/images/Toit-3-sal.webp",
      after: "/images/Toit-3-sal-1.webp",
      description: "Étanchéification par peinture spéciale toiture terrasse",
      orientation: "landscape",
      serviceType: "Peinture de toiture",
    },
    {
      before: "/images/Toit-4-sal.webp",
      after: "/images/Toit-4-sal-1.webp",
      description: "Traitement de toiture contre les mousses et lichens",
      orientation: "landscape",
      serviceType: "Peinture de toiture",
    },
  ],
  // Wall-related sections - All share the same structure: 2 portrait, 1 landscape
  "nettoyage-murs": [
    {
      before: "/images/facade-1-sal.webp",
      after: "/images/facade-1-propre.webp",
      description:
        "Nettoyage haute pression de murs extérieurs couverts de mousse",
      orientation: "portrait",
      serviceType: "Nettoyage de murs",
    },
    {
      before: "/images/facade-2-sal.webp",
      after: "/images/facade-2-propre.webp",
      description: "Élimination des taches et salissures sur façade claire",
      orientation: "portrait",
      serviceType: "Nettoyage de murs",
    },
    {
      before: "/images/facade-3-sal.webp",
      after: "/images/facade-3-propre.webp",
      description: "Traitement anti-moisissure sur murs humides",
      orientation: "landscape",
      serviceType: "Nettoyage de murs",
    },
  ],
  "nettoyage-dallages": [
    {
      before: "/images/dalage-1-sal.webp",
      after: "/images/dalage-1-propre.webp",
      description: "Nettoyage professionnel de terrasse en pierre naturelle",
      orientation: "portrait",
      serviceType: "Nettoyage de dallages",
    },
    {
      before: "/images/dalage-2-sal.webp",
      after: "/images/dalage-2-propre.webp",
      description:
        "Décrassage de dallage extérieur et application d'un traitement protecteur",
      orientation: "portrait",
      serviceType: "Nettoyage de dallages",
    },
  ],
  "ravalement-facade": [
    {
      before: "/images/facade-1-sal.webp",
      after: "/images/facade-1-propre.webp",
      description: "Ravalement complet d'une façade ancienne",
      orientation: "portrait",
      serviceType: "Ravalement de façade",
    },
    {
      before: "/images/facade-2-sal.webp",
      after: "/images/facade-2-propre.webp",
      description: "Réparation de fissures et peinture de façade",
      orientation: "portrait",
      serviceType: "Ravalement de façade",
    },
    {
      before: "/images/facade-3-sal.webp",
      after: "/images/facade-3-propre.webp",
      description: "Restauration de façade en pierre calcaire",
      orientation: "landscape",
      serviceType: "Ravalement de façade",
    },
  ],
  // Renovation boiserie - Only one project, vertical orientation
  "renovation-boiserie": [
    {
      before: "/images/Boiserie-1-sal.webp",
      after: "/images/Boiserie-1-propre.webp",
      description: "Décapage et rénovation de volets en bois anciens",
      orientation: "portrait",
      serviceType: "Rénovation de boiserie",
    },
  ],
  "renovation-mur": [
    {
      before: "/images/facade-1-sal.webp",
      after: "/images/facade-1-propre.webp",
      description:
        "Rénovation d'un mur intérieur avec traitement anti-humidité",
      orientation: "portrait",
      serviceType: "Rénovation de mur",
    },
    {
      before: "/images/facade-2-sal.webp",
      after: "/images/facade-2-propre.webp",
      description: "Réparation et enduit décoratif sur mur de salon",
      orientation: "portrait",
      serviceType: "Rénovation de mur",
    },
    {
      before: "/images/facade-3-sal.webp",
      after: "/images/facade-3-propre.webp",
      description: "Renforcement et isolation d'un mur extérieur",
      orientation: "landscape",
      serviceType: "Rénovation de mur",
    },
  ],
};
