import { Button } from "@/components/button/Button";
import Image from "next/image";
export default function Home() {
  const handleFacebook = () => {};
  return (
    <main className="px-32">
      <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
        Personal link
      </h1>
      <div className="flex justify-between items-center gap-10">
        <div className="flex flex-col gap-y-5 w-full">
          <Button onClick={handleFacebook} text="Facebook" to="" />
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/images/sajjad.jpg"
            className="w-32 h-32 rounded-full"
            alt=""
            height={100}
            width={200}
          />
        </div>
        <div className="w-full">
          <Button onClick={handleFacebook} text="Twitter" to="" />
        </div>
      </div>
    </main>
  );
}
