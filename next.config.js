/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "quotes.imadatyat.me",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
