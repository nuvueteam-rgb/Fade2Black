import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarSales from "@/components/CarSales";
import Inventory from "@/components/Inventory";
import Financing from "@/components/Financing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarSales />
      <Inventory />
      <Financing />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
