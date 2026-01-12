import React from "react";
import { headers } from 'next/headers';
import { PixelatedServerConfigProvider, type SiteInfo } from "@pixelated-tech/components/server";
import { descriptionToKeywords, getRouteByKey } from "@pixelated-tech/components/server";
import { getEbayItem } from "@pixelated-tech/components/server";
import { WebsiteSchema, LocalBusinessSchema, ServicesSchema } from "@pixelated-tech/components/server";
import { VisualDesignStyles } from "@pixelated-tech/components/server";
import Header from "@/app/elements/header";
import HeaderNav from "./elements/headernav";
import Nav from "@/app/elements/nav";
import Search from '@/app/elements/search';
import Footer from '@/app/elements/footer';
import Interactions from "@/app/elements/interactions";
import LayoutClient from "./elements/layoutclient";
import myRoutes from "@/app/data/routes.json";
import "@pixelated-tech/components/css/pixelated.global.css";
import "@pixelated-tech/components/css/pixelated.grid.scss";
import "./globals.css";

import { generateMetaTags } from "@pixelated-tech/components/server";

export default async function RootLayout({ children }: { children: React.ReactNode }) {

	const headersList = await headers();
	const url = headersList.get("x-url") || "";
	const origin = headersList.get("x-origin") || "";
	const pathname = headersList.get("x-path") || "";
	let myMetadata = getRouteByKey(myRoutes.routes, "path", pathname);
	if (!myMetadata) {
		/// NO METADATA FOUND - EBAY STORE ITEM 
		const itemID = pathname.split("/store/")[1];
		const apiProps = {
			qsItemURL: `/v1|${itemID}|0?fieldgroups=PRODUCT,ADDITIONAL_SELLER_DETAILS`,
		};

		// const tokenResponse = await getEbayAppToken({ apiProps });
		const ebayItem = await getEbayItem({ apiProps });
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

	const siteInfo = myRoutes.siteInfo;

	return (
		<html lang="en">
			<LayoutClient />
			<head>
				{ generateMetaTags({
					title: myMetadata?.title ?? "",
					description: myMetadata?.description ?? "",
					keywords: myMetadata?.keywords ?? "",
					origin: origin ?? "",
					url: url ?? "",
					siteInfo: siteInfo as SiteInfo,
				}) }
				<WebsiteSchema siteInfo={siteInfo as SiteInfo} />
				<LocalBusinessSchema siteInfo={siteInfo} />
				<ServicesSchema siteInfo={siteInfo} />
				<VisualDesignStyles visualdesign={myRoutes.visualdesign} />
			</head>

			<body>
				<PixelatedServerConfigProvider>
					<Interactions />
					<header>
						<div id="page-header" className="fixed-header">
							<Header />
						</div>
						<div id="page-header-nav" className="fixed-header-nav">
							<div className="section-container">
								<HeaderNav />
							</div>
						</div>
						<div id="fixed-header-spacer" />
						<div id="fixed-header-nav-spacer" />
						<div id="page-search" className="no-mobile">
							<Search />
						</div>
					</header>
					<nav>
						<Nav />
					</nav>
					<main>
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</PixelatedServerConfigProvider>
			</body>
		</html>
	);
}
