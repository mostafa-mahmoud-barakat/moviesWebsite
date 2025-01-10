import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Avoid layout shift
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Avoid layout shift
});

export const metadata = {
  title: "Movies Website",    
  description: "This is the Website for action movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Providers>
          <Header />
          <Navbar/>
          <SearchBox/>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
