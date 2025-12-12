import React from "react";
import { headers } from 'next/headers';
import { PixelatedServerConfigProvider } from "@pixelated-tech/components/server";
import { descriptionToKeywords, getRouteByKey } from "@pixelated-tech/components/server";
import { defaultEbayProps, getEbayItem } from "@pixelated-tech/components/server";
import { LocalBusinessSchema } from "@pixelated-tech/components";
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

	return (
		<html lang="en">
			<LayoutClient />
			<head>
				{ generateMetaTags({
					title: myMetadata?.title ?? "",
					description: myMetadata?.description ?? "",
					keywords: myMetadata?.keywords ?? "",
					site_name: "PixelVivid",
					email: "info@pixelvivid.com",
					origin: origin ?? "",
					url: url ?? "",
					image: "/images/pixelvivid/pix-512.gif",
					image_height: "512",
					image_width: "512",
					favicon: "/images/favicon.ico"
				}) }
				<LocalBusinessSchema
					name="PixelVivid"
					streetAddress="10 Jade Circle"
					addressLocality="Denville"
					addressRegion="NJ"
					postalCode="07834"
					addressCountry="US"
					telephone="+1-973-710-8008"
					url="https://pixelvivid.com"
					email="info@pixelvivid.com"
					image="/images/pixelvivid/pix-512.gif"
					priceRange="$"
					description="PixelVivid offers a wide variety of artistic products and services such as unique one-of-a-kind painted sunglasses, photography, jewelry, commissioned paintings, and more."
					sameAs={[
						"https://www.facebook.com/profile.php?id=61577216017129",
						"https://twitter.com/pixelvivid2025",
						"https://www.linkedin.com/company/pixelvivid/",
						"https://www.pinterest.com/pixelvivid/",
						"https://www.ebay.com/str/pixelvivid",
						"https://www.instagram.com/pixelvivid",
						"https://www.reddit.com/user/pixelvivid2025/",
						"https://share.google/JhXXmqpY4m1FEc6Y1",
						"https://www.linkedin.com/company/106825397/",
						"https://www.facebook.com/profile.php?id=61577216017129",
						"https://www.instagram.com/pixelated.views/",
						"https://500px.com/brianwhaley",
						"http://www.flickr.com/photos/brianwhaley/",
						"https://secure.istockphoto.com/portfolio/brianwhaley",
						"http://www.shutterstock.com/g/brianwhaley",
						"http://www.blurb.com/user/brianwhaley",
						"http://brianwhaley.shutterfly.com",
						"https://blog.pixelvivid.com",
						"https://share.google/an1Yqe6CTFA946zZV",
					]}
				/>
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
							<Search id="e336d1c9d0e5e48e5" />
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
