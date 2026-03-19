/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/old", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/collections", destination: "/paving", permanent: true },
    ]
  },
}

export default nextConfig
