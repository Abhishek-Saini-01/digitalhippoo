/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           { 
                protocol: "https",
                hostname: "digitalhippo.onrender.com",
           },
           { 
                protocol: "http",
                hostname: "localhost",
           }
        ]
    }
}

module.exports = nextConfig
