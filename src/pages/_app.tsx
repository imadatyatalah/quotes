import React from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import Footer from "@/components/Footer";
import SEO from "next-seo.config";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
