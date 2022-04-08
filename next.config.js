/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

rewrites : async () => [
  {
    source : "public/Privacy.html",
    destination : "/pages/api/Privacy.html"
  }
]

module.exports = nextConfig
