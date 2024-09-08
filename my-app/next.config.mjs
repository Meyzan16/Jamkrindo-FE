// next.config.mjs
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.BASE_URL_SERVER,
  },
};

export default nextConfig;
