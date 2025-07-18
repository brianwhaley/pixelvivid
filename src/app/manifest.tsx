
import type { MetadataRoute } from 'next';
// import { version } from '../../package.json';
 
export default function manifest(): MetadataRoute.Manifest {
	return {
		// @ts-expect-error - Object literal may only specify known properties, and 'author' does not exist in type 'Manifest'.ts(2353)
		author: "Brian Whaley", 
		background_color: "#ffffff",
		default_locale: "en",
		description: "PixelVivid",
		/* developer: "Brian Whaley", */
		/* version: version, */
		developer: {
			name: "Brian Whaley",
			url: "https://www.pixelvivid.com"
		}, 
		// @ts-expect-error - Object literal may only specify known properties, and 'author' does not exist in type 'Manifest'.ts(2353)
		default_locale: "en",
		display: "standalone",
		homepage_url: "https://www.pixelvivid.tech",
		icons: [{
			src: "/images/favicon.ico",
			sizes: "64x64 32x32 24x24 16x16",
			type: "image/x-icon"
		}],
		name: "PixelVivid",
		short_name: "PixelVivid",
		start_url: ".",
		theme_color: "#000000",	
	};
}

/* 
https://nextjs.org/docs/app/guides/progressive-web-apps
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
*/