/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; 

import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import type { Metadata } from "@/app/components/metadata/pixelated.metadata";
import { descriptionToKeywords, getRouteByKey } from "@/app/components/metadata/pixelated.metadata";
import { defaultEbayProps, getEbayAppToken, getEbayItem } from "./components/ebay/pixelated.ebay.functions";
// import { getEbayItemMetadata } from "./components/ebay/pixelated.ebay.functions";
// import { getRouteByKey } from "@brianwhaley/pixelated-components";
// import { getMetadata } from "@brianwhaley/pixelated-components";
import Header from "@/app/elements/header";
import Nav from "@/app/elements/nav";
import Search from '@/app/elements/search';
import Footer from '@/app/elements/footer';
import "@/app/css/pixelated.global.css";
import "@/app/css/pixelated.grid.scss";
import myRoutes from "@/app/data/routes.json";
/* import "../globals.css"; */

export default function RootLayout({ children }: { children: React.ReactNode }) {

	const pathname = usePathname();
	const [ origin, setOrigin ] = useState<string | null>(null);
	const [ metadata, setMetadata ] = useState<Metadata | null>();
	// const [ host, setHost ] = useState<string | null>(null);
	

	useEffect(() => {
		let myMetadata = getRouteByKey(myRoutes.routes, "path", pathname);
		// setMetadata(myMetadata);
		if (myMetadata) {
			// METADATA FOUND - STANDARD PAGE
			setMetadata(myMetadata);
		} else {
			// NO METADATA FOUND - EBAY STORE ITEM 
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
			getEbayAppToken(apiProps)
				.then((response: any) => {
					getEbayItem({ apiProps, token: response })
						.then((item: any) => {
							const thisItem = { ...item } as any;
							const thisItemTitle = "PixelVivid - Item " + thisItem.legacyItemId + " - " + thisItem.title;
							myMetadata = {
								name: thisItem.title,
								path: `/store/${thisItem.legacyItemId}`,
								title: thisItemTitle,
								description: thisItem.description.replace(/[\r\n]+/g, ' '), //.split('\n\n').slice(0, Math.min(4, thisItem.description.split('\n\n').length)).join(' '),
								keywords: descriptionToKeywords(thisItemTitle + " " + thisItem.description, 30).join(", "),
							};
							setMetadata(myMetadata);
							// description: thisItem.description.replace(/(<br\s*\/?>\s*){2,}/gi, ''),
						});
				});
		} 

		setOrigin(window.location.href || null);
		// setOrigin(window.location.origin || null);
		// setHost(window.location.host || null);
	}, []);

	return (
		<html lang="en">
			<head>
				<title>{metadata?.title}</title>
				<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
				<meta name="description" content={metadata?.description} />
				<meta name="keywords" content={metadata?.keywords} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
				<meta property="og:site_name" content="PixelVivid" />
				<meta property="og:title" content={metadata?.title} />
				<meta property="og:url" content={origin ?? undefined} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={metadata?.description} />
				<meta property="og:image" content="/images/pixelvivid/pix-512.gif" />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />
				<meta itemProp="name" content="PixelVivid" />
				<meta itemProp="url" content={origin ?? undefined} />
				<meta itemProp="description" content={metadata?.description} />
				<meta itemProp="thumbnaillUrl" content="/images/pixelvivid/pix-512.gif" />
				<link rel="alternate" href={origin ?? undefined} hrefLang="en-us" />
				<link rel="canonical" href={origin ?? undefined} />
				<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
			</head>
			<body>
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
