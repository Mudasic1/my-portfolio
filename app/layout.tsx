import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar'; // Import with capital 'N'//+

//-
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Mudasir Chandio",
  description: "Portfolio of Muhammad Mudasir Chandio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}
