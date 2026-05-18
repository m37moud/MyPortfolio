/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume/Mahmoud_Ali_Android_Developer.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
