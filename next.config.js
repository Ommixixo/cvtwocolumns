/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: '/cvtwocolumns',
    assetPrefix: '/cvtwocolumns/',
    trailingSlash: true
}

module.exports = nextConfig
