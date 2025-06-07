/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};
