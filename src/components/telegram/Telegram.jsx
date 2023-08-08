import React from "react";

const TelegramButton = () => {
  const handleTelegramClick = () => {
    const telegramURL = `https://t.me/masudwebdev`;
    window.location.href = telegramURL;
  };

  return (
    <>
      <button className="hover:underline hover:text-blue-500" onClick={handleTelegramClick}>+8801752540184</button>
    </>
  );
};

export default TelegramButton;
