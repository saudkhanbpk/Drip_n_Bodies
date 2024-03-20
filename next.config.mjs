/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add file-loader rule
    config.module.rules.push({
      test: /\.(mp4|ogg|webm|wav|mp3|m4a|aac|ac3|caf|flac)$/, // Include various video and audio formats
      use: 'file-loader',
    });

    return config;
  },
};

export default nextConfig;
