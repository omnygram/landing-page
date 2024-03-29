import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Omnygram - Account across blockchains</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow font-sans">
        <div className="w-full max-w-[600px] flex flex-col items-center align-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/loop.gif" // Replace "/loop.gif" with the path to your GIF image
              alt="Omnygram"
              height="200"
              width="200"
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
          <div className="flex flex-row justify-between pt-12 text-black">
            <a href="https://www.canva.com/design/DAFz3JslVlw/IhsjIYuwRlwMvrEmOkHCbA/view?utm_content=DAFz3JslVlw&utm_campaign=designshare&utm_medium=link&utm_source=viewer">
              <div className="w-[200px] text-center p-4 font-sans text-[18px]">
                Pitch deck
              </div>
            </a>
            <a href="https://docsend.com/view/fg5sttgijwtrhyer">
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
