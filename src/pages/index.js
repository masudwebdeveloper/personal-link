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
            <Button href="https://www.facebook.com/profile.php?id=100070448563748" onClick={handleFacebook} text="Facebook" />
            <Button href="https://twitter.com/AnuSazzad?fbclid=IwAR04ns8sjfT_TJo4ZhHY2cbtXUrxgb9Fn-ZXXrqDWzKAf_5Viao24ZvxoUY" onClick={handleFacebook} text="Twitter" />
            <Button href="https://www.linkedin.com/in/sazzad-hossain-onu-461548222/?fbclid=IwAR20A0hwQlsYDZCy-pGQTw4ul8tripHYfE1jGXoafgMAXg99C58vBF04JEI" onClick={handleFacebook} text="Linkedin" />
            <Button href="https://www.instagram.com/sazzadhossain2255/?fbclid=IwAR1J6whOGVB0XrLbHioRYM-KxiIUspoD20Qr_YQA2Xh0mXM_mMAsCVcwfTo" onClick={handleFacebook} text="Instragram" />
            <Button href="https://www.reddit.com/user/sazzadonu/" onClick={handleFacebook} text="Reddit" />
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
            <Button onClick={handleFacebook} text="Dribble" href="https://dribbble.com/Sazzadhossainonu?fbclid=IwAR0qvr5uJtoOSqxnoO56aV0jJ_02KJ4zs9BuV9QjFDfXkvdMg5BtSMn35E4" />
            <Button href="https://www.behance.net/sazzadonu?fbclid=IwAR05EpUtIbVZ6Iq_2Hju0GlzMRRA946__RyxS9PKCYFsoG7UA90AlVT9Vac&" onClick={handleFacebook} text="Behance" />
            <Button href="https://www.uplabs.com/sazzadonu?fbclid=IwAR2r67TM3C22MtigOGornRJjlLfpC1A4WGtwAoLzHyZl6Q-8TLA_gS_pvMk" onClick={handleFacebook} text="Uplabs" />
            <Button href="" onClick={handleFacebook} text="Deviant art" />
            <Button href="" onClick={handleFacebook} text="Pinterest" to="" />
            <Button href="" onClick={handleFacebook} text="Carbon" to="" />
            <Button href="https://themeforest.net/user/sazzadhossainh?fbclid=IwAR1sBw1IWbTON-1uC7Qb4ESx4YrGovLlJMqR-67GxMfZcwaNdrsOMK8biAE" onClick={handleFacebook} text="Inverto Market" />
            <Button href="" onClick={handleFacebook} text="Logo Grount" to="" />
            <Button href="https://www.coroflot.com/SazzadHossainonu/stream?fbclid=IwAR0QYKVV6c7p3Rx-NM0EXgcJuUiuk-wab-jXoZk9UC-1ODMWB1XyrT4hkaE" onClick={handleFacebook} text="Coroflot" />
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r py-10 from-green-400 to-blue-600">
          Infoblox Agency
        </h1>
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col gap-y-5 w-full">
            <Button href="" onClick={handleFacebook} text="Dribble" to="" />
            <Button href="" onClick={handleFacebook} text="Behance" to="" />
            <Button href="" onClick={handleFacebook} text="Uplabs" to="" />
            <Button href="" onClick={handleFacebook} text="Deviant art" to="" />
            <Button href="" onClick={handleFacebook} text="Pinterest" to="" />
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
            <Button href="" onClick={handleFacebook} text="Carbon" to="" />
            <Button href="" onClick={handleFacebook} text="Inverto Market" to="" />
            <Button href="" onClick={handleFacebook} text="Logo Grount" to="" />
            <Button href="" onClick={handleFacebook} text="Coroflot" to="" />
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
