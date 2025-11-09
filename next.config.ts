/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/my-blog',
  assetPrefix: '/my-blog',
  distDir: 'out',
  experimental: {
    mdxRs: true,
  },
}

module.exports = nextConfig
