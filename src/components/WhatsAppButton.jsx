
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "91XXXXXXXXXX";

  const message = "Hello MDRD Perfect Solution, I need your service.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsAppButton;
