/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "cdn.discordapp.com"
    ]
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
