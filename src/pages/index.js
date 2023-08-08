import { Button } from "@/components/button/Button";
import Contact from "@/components/contact/Contact";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const handleFacebook = () => {};
  return (
    <>
      <Head>
        <title>My info</title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main className="px-32">
        <h1 className="text-center mt-5 text-7xl font-bold text-white">
          Sazzad Hossain
        </h1>
        <p className="font-light text-xl mt-5 text-center w-[517px] mx-auto text-gray-300">
          Graphic Designer || Logo and Brand Identity Designer Animation Design
          || Print Design || Email Signature <br /> Sales & Marketing Online
          (Intermediate)
        </p>
        <div className="flex justify-between gap-10 mt-24">
          <div className="flex flex-col gap-y-5 w-full">
            <h1 className="text-center text-5xl font-bold text-white">
              Social Link
            </h1>
            <Button onClick={handleFacebook} text="Facebook" to="" />
            <Button onClick={handleFacebook} text="Twitter" to="" />
            <Button onClick={handleFacebook} text="Linkedin" to="" />
            <Button onClick={handleFacebook} text="Instragram" to="" />
            <Button onClick={handleFacebook} text="Reddit" to="" />
          </div>
          <div className="w-full flex justify-center mt-24">
            <div className="border-dotted border-4 border-gray-500 w-[200px] h-[200px] rounded-full flex items-center justify-center ">
              <div className="w-[200px] h-[194px] rounded-full">
                <Image
                  src="/assets/images/sazzad.jpg"
                  className="w-[200px] h-[194px] rounded-full animate-none"
                  alt=""
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col  gap-y-5">
            <h1 className="text-center text-5xl font-bold text-gray-50">
              Portfolio Link
            </h1>
            <Button onClick={handleFacebook} text="Dribble" to="" />
            <Button onClick={handleFacebook} text="Behance" to="" />
            <Button onClick={handleFacebook} text="Uplabs" to="" />
            <Button onClick={handleFacebook} text="Deviant art" to="" />
            <Button onClick={handleFacebook} text="Pinterest" to="" />
            <Button onClick={handleFacebook} text="Carbon" to="" />
            <Button onClick={handleFacebook} text="Inverto Market" to="" />
            <Button onClick={handleFacebook} text="Logo Grount" to="" />
            <Button onClick={handleFacebook} text="Coroflot" to="" />
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r py-10 from-green-400 to-blue-600">
          Infoblox Agency
        </h1>
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col gap-y-5 w-full">
            <Button onClick={handleFacebook} text="Dribble" to="" />
            <Button onClick={handleFacebook} text="Behance" to="" />
            <Button onClick={handleFacebook} text="Uplabs" to="" />
            <Button onClick={handleFacebook} text="Deviant art" to="" />
            <Button onClick={handleFacebook} text="Pinterest" to="" />
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/images/logo.jpg"
              className="w-[135px] scale-150 h-[135px] rounded-full"
              alt=""
              height={100}
              width={200}
            />
          </div>
          <div className="w-full flex flex-col  gap-y-5">
            <Button onClick={handleFacebook} text="Carbon" to="" />
            <Button onClick={handleFacebook} text="Inverto Market" to="" />
            <Button onClick={handleFacebook} text="Logo Grount" to="" />
            <Button onClick={handleFacebook} text="Coroflot" to="" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-white text-center">Contact Info</h1>
          <Contact />
        </div>
      </main>
    </>
  );
}
