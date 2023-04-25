const NextSeo = {
  titleTemplate: "%s | Quotes",
  defaultTitle: "Quotes",
  description: "Keep your quotes in one place, Share them with your friends.",

  openGraph: {
    type: "website",
    url: "https://quotes.imadatyat.me",
    site_name: "Quotes",
    images: [
      {
        url: "https://quotes.imadatyat.me/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    cardType: "summary_large_image",
  },
};

export default NextSeo;
