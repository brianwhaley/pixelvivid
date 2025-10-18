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
