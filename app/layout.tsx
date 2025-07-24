import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google'
import GradientCloud from "@/components/ui/GradientCloud";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // adjust weights as needed
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Aryan.dev",
  description: "Portfolio website of Aryan Gusain, Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  flex flex-col items-center antialiased`}
      >
        <Navbar />
        <GradientCloud className="inset-auto -z-10"/>
        <div className="flex h-full w-full flex-col items-center sm:w-150 md:w-200">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
