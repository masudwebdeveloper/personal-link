import Link from "next/link";

export const Button = ({ onClick, text, href }) => {
  return (
    <div className="shadow-inner">
      <Link
        href={href}
        onClick={onClick}
        target="_blank"
        class="relative inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gradient-to-r from-[#05A587] to-[#1FDB6D] shadow-2xl rounded-lg group border-2 border-[#042922] hover:border-[#1FDB6D]"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#042922] group-hover:w-full group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#042922]"></span>
        <span class="relative text-2xl text-yellow-50">{text}</span>
      </Link>
    </div>
  );
};
