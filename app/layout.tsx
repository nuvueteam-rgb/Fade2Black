import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fade 2 Black | Pre-Owned Vehicles & Window Tinting | Indianola, Iowa",
  description:
    "Quality pre-owned vehicles and professional ceramic window tinting in Indianola, Iowa. Owned and operated by Austin Easter. Browse inventory and call for a free quote.",
  keywords: [
    "window tinting",
    "car tinting",
    "ceramic tint",
    "Indianola Iowa",
    "pre-owned cars",
    "used cars Indianola",
    "Fade 2 Black",
  ],
  openGraph: {
    title: "Fade 2 Black | Pre-Owned Vehicles & Window Tinting",
    description:
      "Quality pre-owned vehicles and professional ceramic window tinting in Indianola, Iowa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} font-body antialiased bg-black text-silver-light grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
