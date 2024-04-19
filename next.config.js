const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'repository-images.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = withContentlayer(nextConfig);
