import TelegramButton from "../telegram/Telegram";
import WhatsAppLink from "../whatsup/Whatsup";

const Contact = () => {
  const phoneNumber = "+8801752540184";
  const message = "Hello, I am interested in your services.";

  const handleOneClick = () => {
    window.location.href = "mailto:sazzadanu857@gmail.com";
  };

  const handleTwoMeClick = () => {
    window.location.href = "mailto:infoblox50@gmail.com";
  };
  return (
    <div className="w-5/12 text-2xl mx-auto border border-green-400 shadow-lg p-5 rounded mb-10 mt-3 text-center">
      <div className="space-y-3">
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Email: </strong>
          <button className="hover:underline hover:text-blue-500" onClick={handleOneClick}>
            sazzadanu857@gmail.com
          </button>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Email: </strong>
          <button className="hover:underline hover:text-blue-500" onClick={handleTwoMeClick}>infoblox50@gmail.com</button>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Whats up: </strong>
          <WhatsAppLink phoneNumber={phoneNumber} message={message} />
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Skype: </strong>
          <span></span>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Telegram: </strong>
          <TelegramButton />
        </p>
      </div>
    </div>
  );
};

export default Contact;
