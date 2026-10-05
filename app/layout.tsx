import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landsplits.com"),
  title: {
    default: "LandSplits | Land subdivision guidance, city by city",
    template: "%s | LandSplits"
  },
  description:
    "Search subdivision rules, minimum lot sizes, utility requirements, approval processes, and local professionals across the United States and Canada.",
  openGraph: {
    title: "LandSplits",
    description: "Find out what your land could become.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
