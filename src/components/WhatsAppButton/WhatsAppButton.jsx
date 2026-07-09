import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://api.whatsapp.com/send/?phone=5548999771177&text=Ol%C3%A1%2C+tudo+bem%3F%3F++Vim+atrav%C3%A9s+do+site+Kontudo+Surf.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span>💬</span>
      
    </a>
  );
}

export default WhatsAppButton;
