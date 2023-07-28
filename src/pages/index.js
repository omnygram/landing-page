import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Omnygram Bridge</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow font-sans">
        <div className="w-full max-w-[600px] flex flex-col items-center align-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <video
              src="/loop.mp4"
              autoPlay
              loop
              height={"200px"}
              width={"200px"}
              style={{ outline: "none" }}
            />
            <div className="text-center space-y-6 pt-12">
              <h1 className="text-[36px] text-[#4d4d4d] font-medium font-sans">
                Omnygram
              </h1>
              <h2 className="text-[20px] text-[#8c8c8c] font-light font-sans">
                A new era of cross chain
              </h2>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-12">
            <a href="https://docsend.com/view/e8cvqtwzz9u7jpd2">
              <div className="w-[200px] text-center p-4 font-sans text-[18px]">
                Pitch deck
              </div>
            </a>
            <a href="https://docsend.com/view/22ugm23g9dicd3q8">
              <div className="w-[200px] text-center p-4 font-sans text-[18px]">
                Paper
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
