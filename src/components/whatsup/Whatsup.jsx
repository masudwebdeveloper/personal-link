import React from 'react';

const WhatsAppLink = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppLink;
