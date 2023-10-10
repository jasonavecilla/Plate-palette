import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from './components/Blog'

export default function Home() {
  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Recipe
      </main>
      <Blog/>
      <Footer />
    </>
  );
}
