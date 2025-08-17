// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



// next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: { unoptimized: true }, // GitHub Pages doesn't handle next/image optimization
  basePath: '/my_portfolio', // repo name
  assetPrefix: isProd ? '/my_portfolio/' : '',
};

export default nextConfig;
