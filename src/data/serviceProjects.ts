import { ImageProject } from "../components/ImageCarousel";
import { getAssetPath } from "../utils";

// Function to process all image paths in the projects data
function processImagePaths<T extends { before: string; after: string }>(
  projects: T[]
): T[] {
  return projects.map((project) => ({
    ...project,
    before: getAssetPath(project.before),
    after: getAssetPath(project.after),
  }));
}

// Service project data for before/after examples
const rawServiceProjects: Record<string, ImageProject[]> = {
  // Renovation toiture - Toutes les images de toiture sont en paysage (landscape)
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
      description:
        "Nettoyage, traitement anti-mousse et remplacement des tuiles cassées",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-3-sal.webp",
      after: "/images/Toit-3-propre.webp",
      description: "Étanchéification d'une toiture en ardoise",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-4-sal.webp",
      after: "/images/Toit-4-propre.webp",
      description: "Traitement de toiture contre les mousses et lichens",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-5-sal.webp",
      after: "/images/Toit-5-propre.webp",
      description: "Réparation des fuites et renforcement de structure",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-6-sal.webp",
      after: "/images/Toit-6-propre.webp",
      description: "Nettoyage et traitement protecteur de toiture",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-7-sal.webp",
      after: "/images/Toit-7-propre.webp",
      description: "Restauration d'une toiture ancienne en tuiles",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-8-sal.webp",
      after: "/images/Toit-8-propre.webp",
      description: "Peinture hydrofuge pour toiture en pente",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
    {
      before: "/images/Toit-9-sal.webp",
      after: "/images/Toit-9-propre.webp",
      description: "Application d'un revêtement anti-mousse coloré",
      orientation: "landscape",
      serviceType: "Rénovation de toiture",
    },
  ],
  // Nettoyage dallages - Images en format portrait
  "nettoyage-dallages": [
    {
      before: "/images/dallage-1-sal.webp",
      after: "/images/dallage-1-propre.webp",
      description: "Nettoyage professionnel de terrasse en pierre naturelle",
      orientation: "portrait",
      serviceType: "Nettoyages dallages, carrelages et terrasses",
    },
    {
      before: "/images/dallage-2-sal.webp",
      after: "/images/dallage-2-propre.webp",
      description:
        "Décrassage de dallage extérieur et application d'un traitement protecteur",
      orientation: "portrait",
      serviceType: "Nettoyages dallages, carrelages et terrasses",
    },
  ],
  // Ravalement façade - Mélange de formats
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
      description: "Rénovation complète avec traitement imperméabilisant",
      orientation: "landscape",
      serviceType: "Ravalement de façade",
    },
    {
      before: "/images/facade-4-sal.webp",
      after: "/images/facade-4-propre.webp",
      description: "Ravalement et peinture décorative de façade",
      orientation: "landscape",
      serviceType: "Ravalement de façade",
    },
    {
      before: "/images/facade-7-sal.webp",
      after: "/images/facade-7-propre.webp",
      description: "Restauration de façade avec finition traditionnelle",
      orientation: "portrait",
      serviceType: "Ravalement de façade",
    },
  ],
  // Rénovation boiserie - Images en format portrait
  "renovation-boiserie": [
    {
      before: "/images/Boiserie-1-sal.webp",
      after: "/images/Boiserie-1-propre.webp",
      description: "Décapage et rénovation de volets en bois anciens",
      orientation: "portrait",
      serviceType: "Rénovation de boiserie",
    },
    {
      before: "/images/Boiserie-2-sal.webp",
      after: "/images/Boiserie-2-propre.webp",
      description:
        "Restauration de colombages en bois de façade traditionnelle",
      orientation: "portrait",
      serviceType: "Rénovation de boiserie",
    },
    {
      before: "/images/Boiserie-3-sal.webp",
      after: "/images/Boiserie-3-propre.webp",
      description:
        "Traitement anti-insectes et finition pour boiseries extérieures",
      orientation: "portrait",
      serviceType: "Rénovation de boiserie",
    },
    {
      before: "/images/Boiserie-4-sal.webp",
      after: "/images/Boiserie-4-propre.webp",
      description: "Remise en état de bardage bois avec lasure protectrice",
      orientation: "landscape",
      serviceType: "Rénovation de boiserie",
    },
  ],
  // Rénovation mur - Mélange de formats
  "renovation-mur": [
    {
      before: "/images/mur-reno-5-sal.webp",
      after: "/images/mur-reno-5-propre.webp",
      description: "Rénovation d'un mur avec traitement anti-humidité",
      orientation: "landscape",
      serviceType: "Rénovation de mur",
    },
    {
      before: "/images/mur-reno-6-sal.webp",
      after: "/images/mur-reno-6-propre.webp",
      description: "Réparation et enduit décoratif sur mur",
      orientation: "landscape",
      serviceType: "Rénovation de mur",
    },
    {
      before: "/images/mur-reno-8-sal.webp",
      after: "/images/mur-reno-8-propre.webp",
      description: "Renforcement et traitement d'un mur",
      orientation: "landscape",
      serviceType: "Rénovation de mur",
    },
  ],
};

// Export the raw service projects with processed image paths
export const serviceProjects: Record<string, ImageProject[]> =
  Object.fromEntries(
    Object.entries(rawServiceProjects).map(([key, projects]) => [
      key,
      processImagePaths(projects),
    ])
  );
