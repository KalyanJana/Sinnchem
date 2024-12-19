// components/WhatsAppButton.js
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab } from "@mui/material";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phone = "919733241500"; // Include country code without '+'
    const text = "Hello"; // Message to send
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <Fab
      onClick={handleWhatsAppClick}
      color="success"
      aria-label="whatsapp"
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        minWidth: "auto",
        width: "50px",
        height: "50px",
        zIndex: 1000,
        boxShadow: 3,
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
