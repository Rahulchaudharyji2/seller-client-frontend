import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Permanent_Marker, Roboto_Condensed } from "next/font/google"; // Import Roboto Condensed
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const robotoCondensed = Roboto_Condensed({ // Define Roboto Condensed
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Include desired font weights
  style: ["normal", "italic"], // Include normal & italic styles
});

export const metadata: Metadata = {
  title: "About Us",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
