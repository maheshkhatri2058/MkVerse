import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mkverse",
  icons:'/logo.png',
  description: "Explore Projects, Blogs & Tech Innovations | Web Developer Portfolio",
  keywords: "web developer, portfolio, projects, blogs, tech innovations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
    <link rel="icon" type="image/png" href="/logo.png"></link>

    </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
