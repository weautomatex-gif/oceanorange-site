/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
