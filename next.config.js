/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
