import Link from "next/link";
import styles from "./Button.module.css";

export const Button = ({ onClick, text, href = "#" }) => {
  return (
    <div className="">
      <Link
        href={href}
        onClick={onClick}
        class="relative inline-flex items-center justify-center w-full px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 group-hover:w-full group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative">{text}</span>
      </Link>
    </div>
  );
};
