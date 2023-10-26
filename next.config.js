/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "Iv1.42ac04affb154bbb",
    GITHUB_APP_CLIENT_SECRET: "34b0e52f9d578f2171b3a659aa93ae5a4e4e5a90",
    NEXTAUTH_SECRET: "crBGltOA71f+/VBfy1YOG77a1iMWc4MnbgSW3BvCoLw=",
  },
};

module.exports = nextConfig;
