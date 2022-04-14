/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["ik.imagekit.io"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
