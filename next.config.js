/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "100dayscss.com",
      },
    ],
  },
}

module.exports = nextConfig
