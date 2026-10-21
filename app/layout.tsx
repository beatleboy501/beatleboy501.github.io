import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const pacificoSans = Pacifico({
  variable: "--font-Pacifico-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Andrew Allison Services LLC",
  description: "Consulting expertise built on decades of experience",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pacificoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html >
  );
}
