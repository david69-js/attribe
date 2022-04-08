/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


rewrites : async () => [
  {
    source : "public/Privacy.html",
    destination : "/pages/api/Privacy.html",
  },
  {
    source : "public/Terms.html",
    destination : "/pages/api/Terms.html"
  },
]

module.exports = nextConfig

