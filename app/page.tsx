import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSplit from "@/components/ServicesSplit";
import CarSales from "@/components/CarSales";
import About from "@/components/About";
import WindowTinting from "@/components/WindowTinting";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSplit />
      <CarSales />
      <About />
      <WindowTinting />
      <Footer />
    </main>
  );
}
