import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WindowTinting from "@/components/WindowTinting";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Ceramic Window Tinting | Fade 2 Black | Indianola, Iowa",
  description:
    "Professional ceramic window tinting by Kevin Jones with 10+ years experience. 99% UV protection, heat rejection, and privacy. Fade 2 Black — Indianola, Iowa.",
  openGraph: {
    title: "Professional Ceramic Window Tinting | Fade 2 Black | Indianola, Iowa",
    description:
      "Professional ceramic window tinting by Kevin Jones with 10+ years experience. 99% UV protection, heat rejection, and privacy. Fade 2 Black — Indianola, Iowa.",
    type: "website",
    url: "https://fade2black.com/tinting",
  },
};

export default function TintingPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <WindowTinting />
      <Footer />
    </main>
  );
}
