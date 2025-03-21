import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { PlaceProvider } from "@/context/PlaceContext";

const notoSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        <PlaceProvider>
          <Header/>
          {children}
        </PlaceProvider>
      </body>
    </html>
  );
}
