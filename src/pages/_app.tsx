import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DefaultSeo } from "next-seo";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import SEO from "next-seo.config";

import "@/styles/globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus_jakarta_sans",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <style jsx global>{`
        html {
          font-family: ${plus_jakarta_sans.style.fontFamily};
        }
      `}</style>

      <ThemeProvider defaultTheme="system" attribute="class">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
