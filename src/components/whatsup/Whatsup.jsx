import React from 'react';

const WhatsAppLink = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a className="hover:underline hover:text-blue-500" href={whatsappURL} target="_blank" rel="noopener noreferrer">
      +8801752540184
    </a>
  );
};

export default WhatsAppLink;
