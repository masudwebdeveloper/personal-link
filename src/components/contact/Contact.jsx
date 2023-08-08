import WhatsAppLink from "../whatsup/Whatsup";

const Contact = () => {
  const phoneNumber = '01796682951';
  const message = 'Hello, I am interested in your services.';
  return (
    <div className="w-4/12 mx-auto border border-green-400 shadow-lg p-5 rounded mb-10 mt-3 text-center">
      <div className="space-y-3">
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Email: </strong>
          <span>sazzadanu857@gmail.com</span>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Email: </strong>
          <span>infoblox50@gmail.com</span>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Whats up: </strong>
          <WhatsAppLink phoneNumber={phoneNumber} message={message} />
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Skype: </strong>
          <span>abdullainfo30@gmail.com</span>
        </p>
        <p className="bg-gradient-to-r from-[#0a5749] to-[#05913f] text-white py-1 px-5 rounded-full">
          <strong>Telegram: </strong>
          <span>abdullainfo30@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
