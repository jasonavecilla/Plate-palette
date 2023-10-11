import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SlideShow from "./components/SlideShow";

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideShow />
      <Footer />
    </>
  );
}
