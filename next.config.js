/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com", "cdn.discordapp.com"],
  },
  experimental: {
    swcPlugins: [
      ["@preact-signals/safe-react/swc", {} /* plugin options here */],
    ],
  },
}

module.exports = nextConfig
