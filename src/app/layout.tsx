import type { Metadata } from "next";
import { Sen } from "next/font/google";

import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Potepsychometrics App",
  description:
    "Unlock the potential of psychological evaluation with Potepsychometrics.",
};

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Josef.className} flex flex-col justify-between min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
