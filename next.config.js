/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
}
 
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adil-next-ecommerce.s3.amazonaws.com',
        
      },
    ],
    head: {
      // Add a link to your favicon in the <head> section
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico', // Path to your favicon.ico file
        },
      ],
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};







