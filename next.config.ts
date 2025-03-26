import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ["store.storeimages.cdn-apple.com", "www.machines.com.my"],
		// Optional: you can also configure device sizes and image formats
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		formats: ["image/webp"],
		// Optional: configure minimum cache TTL (in seconds)
		minimumCacheTTL: 60,
	},
};

export default nextConfig;
