import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REXANTEC",
  description: "Generated by next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-419">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
