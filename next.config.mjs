/** @type {import('next').NextConfig} */
const nextConfig = {
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
    }
};

export default nextConfig;