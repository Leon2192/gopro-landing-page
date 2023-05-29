import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import { createTheme } from "@nextui-org/react";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Go Pro - Landing project",
  description: "Proyecto desarrollado con Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <a
          href="https://api.whatsapp.com/send?phone=541127682286"
          className="btn-wsp"
          target="_blank"
        >
          <img src="/whatsapp.png" alt="logowhatsapp" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
