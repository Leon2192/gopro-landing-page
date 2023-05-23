import "./globals.css";

import { Poppins } from "next/font/google";

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
        {children}
        <a
          href="https://api.whatsapp.com/send?phone=541127682286"
          className="btn-wsp"
          target="_blank"
        >
          <img src="/whatsapp.png" alt="logowhatsapp" />
        </a>
      </body>
    </html>
  );
}
