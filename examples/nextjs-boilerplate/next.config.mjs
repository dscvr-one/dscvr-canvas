/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@dscvr-one/canvas-client-sdk'],
  webpack: (config, { dev }) => {
    if (dev) {
      Object.defineProperty(config, 'devtool', {
        get() {
          return 'cheap-source-map';
        },
        set() {},
      });
    }
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'connect-src https://api.devnet.solana.com/;',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
