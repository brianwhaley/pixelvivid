"use client";

import React from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { CalloutHeader } from "@brianwhaley/pixelated-components";
import * as CalloutLibrary from "@/app/elements/calloutlibrary";
import SocialTags from "@/app/elements/socialtags";

export default function Home() {

	return (
		<>
			<section id="products-section">
				<div className="section-container">
					<br />
					<PageHeader title="PixelVivid Products & Services" />
					<div className="row-12col">
						<div className="grid-s3-e8">
							PixelVivid offers a wide variety of artistic products 
							and services such as unique one-of-a-kind painted sunglasses, 
							photography, jewelry, commissioned paintings, and more. 
							Explore our creative offerings below. 
						</div>
					</div>
					<div className="row-2col">
						<CalloutLibrary.customSunglasses />
						<CalloutLibrary.photography />
					</div>
				</div>
			</section>

			<section className="section-alt" id="social-section">
				<div className="section-container">

					<SocialTags />

					<div className="row-1col">
						<div className="gridItem">
							<div className="callout-body">
								Links to each of my social media accounts and a few recent postings from each,
								including 500px, Blurb, Etsy, Facebook, Flickr,
								Instagram, iStock Photo, LinkedIn, Pinterest, Reddit, Shutterfly, Shutterstock, 
								Twitter, Tumblr, Youtube, and more.
								<br/>
								<div className="centeredbutton"><a href="socialmedia">My Social Media</a></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="spotlight-section">
				<div className="section-container">
					<CalloutHeader title="Featured Spotlights" />
					<div className="row-3col">
						<div className="gridItem">
							<CalloutLibrary.sunglassStore />
						</div>
						<div className="gridItem">
							<CalloutLibrary.subscribe />
						</div>
						<div className="gridItem">
							<CalloutLibrary.specialOrder />
						</div>
						
					</div>
				</div>
			</section>

			<section className="section-alt" id="review-section">
				<div className="section-container">
					<div className="row-12col">
						<div className="grid-s2-e9">
							
							{ /* <!-- Start of OpenWidget (www.openwidget.com) code --> */ }
							{ /* <script dangerouslySetInnerHTML={{ __html: `
							window.__ow = window.__ow || {};
							window.__ow.organizationId = "3cdce40e-6dd7-4712-9818-21d4fe3d4973";
							window.__ow.integration_name = "manual_settings";
							window.__ow.product_name = "openwidget";
							;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
							`,
							}}
							/> 
							<noscript>You need to <a href="https://www.openwidget.com/enable-javascript" rel="noopener nofollow">enable JavaScript</a> to use the communication tool powered by <a href="https://www.openwidget.com/" rel="noopener nofollow" target="_blank">OpenWidget</a></noscript>
							*/ } 
							{ /* <!-- End of OpenWidget code --> */ }

							<CalloutLibrary.feedback />
						</div>
					</div>
				</div>
			</section>

			<section className="section" id="upcycle-section">
				<div className="section-container">
					<div className="row-12col">
						<div className="grid-s2-e9">
							<CalloutLibrary.sustainabilityMessage />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
