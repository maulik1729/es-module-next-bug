/** @type {import('next').NextConfig} */


module.exports = (nextConfig) => {
  return {
    ...nextConfig,
    swcMinify: true,
    experimental: {
      forceSwcTransforms: true,
    },
  };
};

