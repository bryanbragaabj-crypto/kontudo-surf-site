import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://api.whatsapp.com/send/?phone=5548999771177&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+atrav%C3%A9s+do+site+da+Importadora+Kontudo+Surf+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.01 3C8.83 3 3 8.74 3 15.82c0 2.52.75 4.98 2.16 7.07L3 29l6.3-2.07a13.1 13.1 0 0 0 6.7 1.83h.01C23.18 28.76 29 23.02 29 15.94 29 8.85 23.18 3 16.01 3Zm0 23.57h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.24-3.74 1.23 1.25-3.61-.26-.42a10.64 10.64 0 0 1-1.67-5.73c0-5.87 4.86-10.65 10.84-10.65 5.97 0 10.83 4.78 10.83 10.65 0 5.86-4.86 10.64-10.83 10.64Zm5.94-7.97c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.25-.71.08-.33-.16-1.38-.5-2.63-1.6a9.9 9.9 0 0 1-1.82-2.23c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.76-1.02-2.41-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.1-1.14 2.69 0 1.59 1.17 3.12 1.33 3.34.16.22 2.3 3.46 5.57 4.86.78.33 1.39.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.94-.78 2.21-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.63-.38Z"
        />
      </svg>

      <span className="whatsapp-tooltip">
        Fale conosco
      </span>
    </a>
  );
}

export default WhatsAppButton;
