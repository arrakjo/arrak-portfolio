/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["ik.imagekit.io", "media.graphassets.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
