import React from "react";
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { headers } from 'next/headers';
// import { getEbayItemMetadata } from "./components/ebay/pixelated.ebay.functions";
// import { getRouteByKey } from "@brianwhaley/pixelated-components";
// import { getMetadata } from "@brianwhaley/pixelated-components";
import "@brianwhaley/pixelated-components/css/pixelated.global.css";
import "@brianwhaley/pixelated-components/css/pixelated.grid.scss";
import { descriptionToKeywords, getRouteByKey } from "@brianwhaley/pixelated-components/server";
import { defaultEbayProps, getEbayAppToken, getEbayItem } from "@brianwhaley/pixelated-components/server";
import Header from "@/app/elements/header";
import Interactions from "@/app/elements/interactions";
import Nav from "@/app/elements/nav";
import Search from '@/app/elements/search';
import Footer from '@/app/elements/footer';
import myRoutes from "@/app/data/routes.json";
import packageJSON from "../../package.json";
import "./globals.css";

// export const dynamic = 'force-static';
export async function generateMetadata (): Promise<Metadata> {
	// read route params
	const headersList = await headers();
	const url = headersList.get("x-url") || "";
	const origin = headersList.get("x-origin") || "";
	const pathname = headersList.get("x-pathname") || "";
	let myMetadata = getRouteByKey(myRoutes.routes, "path", pathname);
	if (!myMetadata) {
		/// NO METADATA FOUND - EBAY STORE ITEM 
		const itemID = pathname.split("/store/")[1];
		let apiProps = {
			proxyURL: "https://proxy.pixelated.tech/prod/proxy?url=",
			qsItemURL: `/v1|${itemID}|0?fieldgroups=PRODUCT,ADDITIONAL_SELLER_DETAILS`,
			appId: 'BrianWha-Pixelate-PRD-1fb4458de-1a8431fe', // clientId
			appCertId: 'PRD-fb4458deef01-0d54-496a-b572-a04b', // clientSecret
			tokenScope: 'https://api.ebay.com/oauth/api_scope',
			globalId: 'EBAY-US',
		};
		apiProps = { ...defaultEbayProps, ...apiProps };

		const tokenResponse = await getEbayAppToken(apiProps);
		const ebayItem = await getEbayItem({ apiProps, token: tokenResponse });
		const thisItem = await { ...ebayItem };
		const thisItemTitle = "PixelVivid - Item " + await thisItem.legacyItemId + " - " + await thisItem.title;

		myMetadata = {
			name: await thisItem.title,
			path: `/store/${ await thisItem.legacyItemId}`,
			title: thisItemTitle,
			description: await thisItem.description?.replace(/[\r\n]+/g, ' '), //.split('\n\n').slice(0, Math.min(4, thisItem.description.split('\n\n').length)).join(' '),
			keywords: descriptionToKeywords(thisItemTitle + " " + await thisItem.description, 30).join(", "),
		};
	}
 
	return {
		// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
		metadataBase: new URL(origin),
		alternates: {
			canonical: url,
			languages: {
      			'en-US': url
    		},
		},
		applicationName: packageJSON.name,
		authors: [{ name: packageJSON.author.name, url: packageJSON.author.url }],
		creator: packageJSON.author.name,
		description: await myMetadata?.description,
		icons: {
			icon: { 
				url: '/images/favicon.ico',
				sizes: '48x48', 
				type: 'image/x-icon' },
			shortcut: {
				url: '/images/favicon.ico',
				sizes: '48x48',
				type: 'image/x-icon' },
		},
		keywords: await myMetadata?.keywords,
		manifest: '/manifest.webmanifest',
		other: {
			version: packageJSON.version,
		},
		publisher: packageJSON.name,
		// referrer: 'origin-when-cross-origin',
		title: await myMetadata?.title,
		openGraph: {
			description: await myMetadata?.description,
			images: [
				{ url: "/images/pixelvivid/pix-512.gif", width: "512", height: "512" } 
			],
			locale: 'en_US',
			siteName: packageJSON.name,
			title: await myMetadata?.title,
			type: 'website',
			url: url,
		},
	};
}

export function generateViewport(): Viewport {
  	return {
		width: 'device-width, shrink-to-fit=no',
		initialScale: 1.0,
		minimumScale: 1.0,
		maximumScale: 1.0,
		userScalable: false
  	};
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{ /* <head>
				<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
				<meta itemProp="name" content="PixelVivid" />
				<meta itemProp="url" content={origin ?? undefined} />
				<meta itemProp="description" content={metadata?.description} />
				<meta itemProp="thumbnaillUrl" content="/images/pixelvivid/pix-512.gif" />
			</head> */ }

			<body>
				<Interactions />
				<header>
					<div id="page-header" className="fixed-header"><Header /></div>
					<div id="fixed-header-spacer"></div>
					<div id="page-search" className="noMobile"><Search id="e336d1c9d0e5e48e5" /></div>
				</header>
				<nav><Nav /></nav>
				<main>{children}</main>
				<footer><Footer /></footer>
			</body>
		</html>
	);
}
