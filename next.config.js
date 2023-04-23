/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "quotes.imadatyat.me"],
  },
};

module.exports = nextConfig;
