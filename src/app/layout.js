import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}