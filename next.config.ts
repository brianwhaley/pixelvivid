import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
	env: {
		PIXELATED_CONFIG_KEY: process.env.PIXELATED_CONFIG_KEY,
	},
	experimental: {
    	optimizeCss: false,
  	},
	outputFileTracingIncludes: {
		'/**': ['./src/app/config/pixelated.config.json.enc'],
	},
	productionBrowserSourceMaps: true,
	transpilePackages: ['@pixelated-tech/components'],
	trailingSlash: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
    	minimumCacheTTL: 2592000, // 1 month
    	qualities: [25, 50, 75, 100],
		remotePatterns: [
			{
				protocol: 'https', // Or 'http' if needed, but 'https' is recommended
				hostname: '**', // Allows any hostname
				port: '', // Optional: specify port if needed
				pathname: '**', // Optional: allows any pathname
			},
		],
	},

	async redirects() {
		return [];
	},

	turbopack: {},
	
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false
		};
		if (!config.resolve) config.resolve = {};
		if (!config.resolve.alias) config.resolve.alias = {};
		config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},

};

export default nextConfig;
