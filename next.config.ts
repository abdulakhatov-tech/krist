import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "store.storeimages.cdn-apple.com",
			},
			{
				protocol: "https",
				hostname: "www.machines.com.my",
			},
		],
		formats: ["image/webp"],
		minimumCacheTTL: 60,
	},
};

export default nextConfig;
