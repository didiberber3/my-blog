import type { NextConfig } from "next";

// Set deploy time environment variable
if (typeof process !== 'undefined') {
  process.env.NEXT_PUBLIC_DEPLOY_TIME = new Date().toISOString();
}

const nextConfig: NextConfig = {
  // Only use static export in production builds, not in development
  ...(process.env.NODE_ENV === 'production' && process.env.NEXT_EXPORT === 'true' 
    ? {
        output: 'export' as const,
        distDir: 'out',
        images: {
          unoptimized: true, // Static export disables Image optimization
        },
      }
    : {
        // Development mode: normal Next.js behavior with dynamic routes
        images: {
          unoptimized: false,
        },
      }),
};

export default nextConfig;
