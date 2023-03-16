import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { DefaultSeo } from "next-seo";

import GlobalLayout from "@/layout/Global";
import SEO from "next-seo.config";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
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
