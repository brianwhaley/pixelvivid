import React, { Fragment } from "react";
import Header from "@/app/elements/header";
import Hero from "@/app/elements/hero";
import Nav from "@/app/elements/nav";
import Search from '@/app/elements/search';
import Footer from '@/app/elements/footer';

export default function HomeLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<Fragment>
			<header>
				<div id="page-header" className="fixed-header"><Header /></div>
				<div id="fixed-header-spacer"></div>
				<div><Hero /></div>
				<div id="page-search" className="noMobile"><Search id="e336d1c9d0e5e48e5" /></div>
			</header>
			<nav><Nav /></nav>
			<main>{children}</main>
			<footer><Footer /></footer>
		</Fragment>
	);
}
