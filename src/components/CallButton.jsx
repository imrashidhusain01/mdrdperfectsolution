
import { Phone } from "lucide-react";

function CallButton() {
  // Yahan apna actual mobile number daalein
  const phoneNumber = "918368593966";

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label="Call MDRD Perfect Solution"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-110 hover:bg-blue-700"
    >
      <Phone size={27} />
    </a>
  );
}

export default CallButton;
