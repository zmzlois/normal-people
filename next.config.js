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
    async rewrites() {
        return [
            {
                source: '/setup.sh',
                destination: '/api/setup/script',
            },
            {
                source: '/setup/zshrc',
                destination: '/api/setup/zshrc',
            },
            {
                source: '/setup/zprofile',
                destination: '/api/setup/zprofile',
            },
            {
                source: '/setup/starship.toml',
                destination: '/api/setup/starship',
            },
        ];
    },
};

module.exports = withContentlayer(nextConfig);
