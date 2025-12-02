import React from "react";

/**
 * WhatsAppButton
 *
 * Props:
 * - phone: string (international format, e.g. "8801855532666" or "23052511106")
 * - message: string (optional prefilled message)
 * - size: number (button diameter in px, default 64)
 * - position: object (css offsets, default { bottom: 20, right: 20 })
 * - className: string (additional classes)
 */
const WhatsAppButton = ({
  phone = "+8801610606087",
  message = "Hello! I would like to inquire about your services.",
  size = 64,
  position = { bottom: 20, right: 20 },
  className = "",
}) => {
  // Build wa.me url. Must be digits only (no plus, parentheses or dashes).
  const cleaned = phone.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message || "");
  const href = `https://wa.me/${cleaned}${encodedMessage ? `?text=${encodedMessage}` : ""}`;

  const style = {
    width: size,
    height: size,
    bottom: `${position.bottom}px`,
    right: `${position.right}px`,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ${className}`}
      style={{
        ...style,
        background: "linear-gradient(180deg,#25D366,#128C7E)", // WhatsApp gradient
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      {/* subtle pulsing ring */}
      <span
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: size + 12,
          height: size + 12,
          bottom: `-${12 / 2}px`,
          right: `-${12 / 2}px`,
          boxShadow: "0 0 0 0 rgba(37,211,102,0.5)",
          animation: "wh-pulse 2.5s infinite",
        }}
      />
      {/* WhatsApp svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={Math.floor(size * 0.55)}
        height={Math.floor(size * 0.55)}
        className="relative z-10"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M16 3C9.4 3 4 8.4 4 15c0 2.7.9 5.2 2.6 7.2L4 29l7-2.6c1.9 1 4.1 1.6 6 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3z"
        />
        <path
          fill="#25D366"
          d="M22.3 20.8c-.4-.2-2.5-1.2-2.9-1.4-.5-.2-.9-.3-1.3.2-.4.5-1.8 1.4-2.2 1.7-.4.3-.8.2-1.3.1-1.3-.4-3-1.5-4.1-3C8.4 16 8.1 13 9 11.1c.3-.6 1.4-1.5 2.1-1.5.6 0 .9.2 1.3.5.4.3 1.2.9 1.6 1.1.4.2.6.2.9-.1.6-.6 1.1-1.4 1.5-1.9.2-.3.1-.7 0-1-.2-.5-.5-1.1-.6-1.5-.3-.6-.9-.6-1.4-.6-1.2 0-2.4.2-3.6.9C9.3 8 7.7 10 7.1 12.6c-.8 3.9.6 7.7 3.6 10.1 2.8 2.3 6.9 2.7 10.1 1.1 1.8-.9 3.1-2.5 3.5-4.6.1-.7-.2-1.1-.8-1.1-.3 0-.6.1-1 .3z"
          opacity="0.0"
        />
        <path
          fill="#fff"
          d="M20.2 18.1c-.3-.1-1.9-.9-2.2-1-.3-.1-.5-.1-.7.2-.1.3-.5 1-0.6 1.1-.1.1-.3.2-.6.1-0.9-.3-2-1.2-2.6-2.1-0.6-.9-.8-1.8-0.7-2.1.1-.3.5-.5.8-.7 0.3-.2.6-.4.8-.6 0.3-.2.5-.3.8-.3 0.2 0 .4 0.1.6.2.2 0.1.6 0.3.8 0.4.2 0.1.3 0.2.5 0.2 0.2 0 0.4-.1.6-.3 0.3-.2 0.9-.7 1.2-1 0.4-.3 0.6-.7 1-0.7.3 0.1 0.8 0.5 1 0.6 0.1 0.1 0.1 0.2.1 0.4 0 0.2-.1 0.5-.2 0.8-0.1 0.3-.5 0.9-.6 1.1-0.1 0.2-.2 0.3 0 0.5 0.2 0.2 1.2 1.8 1.3 2 0.1 0.2 0.1 0.4-.1 0.5-0.2 0.1-1 0.4-1.4 0.3z"
        />
      </svg>

      {/* small label (optional) */}
      <span className="sr-only">Chat on WhatsApp</span>

      {/* inline keyframes for pulse (so user doesn't need extra CSS) */}
      <style>{`
        @keyframes wh-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37,211,102,0.45);
            transform: translateZ(0);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37,211,102,0);
            transform: translateZ(0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37,211,102,0);
            transform: translateZ(0);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
