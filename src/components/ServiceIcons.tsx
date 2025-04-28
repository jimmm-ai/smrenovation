import { Home, Hammer, Palette, Building, Wrench, HardHat } from "lucide-react";

// Utility function to get the appropriate icon for each service
export function getServiceIcon(
  serviceId: string,
  className: string = "w-10 h-10"
) {
  switch (serviceId) {
    case "renovation-toiture":
      return <Home className={className} />;
    case "nettoyage-dallages":
      return <Hammer className={className} />;
    case "peinture-toiture":
      return <Palette className={className} />;
    case "ravalement-facade":
      return <Building className={className} />;
    case "renovation-boiserie":
      return <Wrench className={className} />;
    case "renovation-mur":
      return <HardHat className={className} />;
    default:
      return <HardHat className={className} />;
  }
}
