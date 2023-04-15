import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DefaultSeo } from "next-seo";

import GlobalLayout from "@/layout/Global";
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
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
