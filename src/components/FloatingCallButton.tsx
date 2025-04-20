import { Phone } from "lucide-react";

interface FloatingCallButtonProps {
  phoneNumber: string;
}

export default function FloatingCallButton({
  phoneNumber,
}: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 z-40 flex items-center justify-center"
      aria-label="Appeler maintenant"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
}
