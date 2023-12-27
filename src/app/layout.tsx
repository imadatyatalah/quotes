import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";
import type { Metadata } from "next";

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus_jakarta_sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quotes.imadatyat.me"),

  title: {
    default: "Quotes by Imad Atyat-Allah",
    template: "%s | Quotes by Imad Atyat-Allah",
  },

  description: "Keep your quotes in one place, Share them with your friends.",

  openGraph: {
    title: "Quotes by Imad Atyat-Allah",
    description: "Keep your quotes in one place, Share them with your friends.",
    url: "https://quotes.imadatyat.me",
    siteName: "Quotes by Imad Atyat-Allah",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Quotes by Imad Atyat-Allah",
    card: "summary_large_image",
  },
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.variable} font-plus_jakarta_sans`}>
        <Providers>
          <Header />

          <main>{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
