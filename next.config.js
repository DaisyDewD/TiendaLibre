/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },

  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es-ES", "pt-BR"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
