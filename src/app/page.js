import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import VideoAbout from "./components/VideoAbout/VideoAbout";
import Plans from "./components/Plans/Plans";
import Banner from "./components/Banner/Banner";
import Support from "./components/Support/Support";
import Footer from "./components/Footer.js/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Process />
      <VideoAbout />
      <Plans />
      <Banner />
      <Support />
      <Footer />
      <Link
        href="https://api.whatsapp.com/send?phone=SEUNUMERO"
        className="fixed bottom-8 right-8 z-50 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/whats.png" alt="WhatsApp Icon" width={50} height={50} />
      </Link>
    </div>
  );
}
