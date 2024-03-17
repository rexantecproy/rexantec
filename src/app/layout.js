import { Inter } from "next/font/google";
import "./globals.css";

import CircleMenu from "@/components/Circle-Animation/circleMenu";
import Footer from "@/components/MainFooter/Footer";
import NavBar from "@/components/MainNav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REXANTEC",
  description: "Brindamos soluciones termomecánicas de manera integral.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-419">
      <link rel="apple-touch-icon" href="https://i.imgur.com/ZoO6k92.png" />
      <link rel="icon" href="https://i.imgur.com/ZoO6k92.png" type="image/x-png" />
      <body className={`${inter.className} bg-[#ffffff] web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color antialiased flex justify-center flex-col items-center`}>
        <NavBar />
        {children}
        <CircleMenu colorCicle={'#e5f2f926'} colorCicleHover={'#0ea5e9'} />
        <Footer />
        </body>
    </html>
  );
}