/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },
  experimental: {
    runtime: "nodejs",
    serverComponents: true
  }
}

module.exports = nextConfig
