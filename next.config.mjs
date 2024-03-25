const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/my-bucket/**',
            }
        ],
        loader: "custom",
        loaderFile: "app/loader/image/loader.ts"
    },
    experimental: {
        typedRoutes: true
    }
};

module.exports = withMDX(nextConfig)
export default nextConfig;
