import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import VideoAbout from "./components/VideoAbout/VideoAbout";
import Plans from "./components/Plans/Plans";
import Banner from "./components/Banner/Banner";
import Support from "./components/Support/Support";
import Footer from "./components/Footer.js/Footer";

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
    </div>
  );
}
