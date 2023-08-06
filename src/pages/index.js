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
      <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
    </Head>
      <main className="px-32">
        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r py-10 from-green-400 to-blue-600">
          Social link
        </h1>
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col gap-y-5 w-full">
            <Button onClick={handleFacebook} text="Facebook" to="" />
            <Button onClick={handleFacebook} text="Twitter" to="" />
            <Button onClick={handleFacebook} text="Linkedin" to="" />
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/images/sajjad.jpg"
              className="w-32 scale-150 h-32 rounded-full"
              alt=""
              height={100}
              width={200}
            />
          </div>
          <div className="w-full flex flex-col  gap-y-5">
            <Button onClick={handleFacebook} text="Instragram" to="" />
            <Button onClick={handleFacebook} text="Reddit" to="" />
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
              className="w-32 scale-150 h-32 rounded-full"
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
          <Contact />
        </div>
      </main>
    </>
  );
}
