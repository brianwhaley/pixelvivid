"use client";

import React from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { CalloutHeader } from "@brianwhaley/pixelated-components";
import { SocialCards } from "@brianwhaley/pixelated-components";
import SocialTags from "@/app/elements/socialtags";

/* ========== NOTES ==========
TO DO : Google News Saved Articles
ERRORS: 500px, shutterfly - malformed XML RSS
*/

const myRSSFeeds = {
	SOOpx: { url: "https://500px.com/brianwhaley/rss" },
	/* blog */
	/* BLURB */
	/* FACEBOOK */
	flickr: { url : "https://www.flickr.com/services/feeds/photoset.gne?nsid=15473210@N04&set=72157712416706518&lang=en-us&format=rss2" },
	/* goodreads */
	/* INSTAGRAM */
	/* iStockPhoto */
	/* LinkedIn */
	pinterest: { url: "https://www.pinterest.com/pixelvivid/feed.rss" },
	reddit: { url: "https://www.reddit.com/user/pixelvivid2025/submitted/.rss" },
	shutterfly: { url: "https://cmd.shutterfly.com/commands/format/rss?site=brianwhaley&page=brianwhaley" },
	/* snapchat */
	/* ShutterStock */
	/* TickTock */
	/* tumblr */
	x: { url : "https://rsshub.app/twitter/user/pixelvivid2025", iconSrcAlt: 'Tweets from Brian Whaley'},
	/* youtube */
};

export default function SocialMedia() {
	return (
		<>
			<section id="page-header-section">
				<div className="section-container">
					<PageHeader title="Social Media Presence" />
				</div>
			</section>

			<section className="section-alt" id="social-links-section">
				<div className="section-container callout">
					<SocialTags />
				</div>
			</section>

			<section id="social-cards-section">
				<div className="section-container">
					<CalloutHeader title="Social Posts" />
					<div className="row-12col">
						<div id="socialCards" className="callout grid-s1-e12">
							<div className="callout-body">
								<div className="grid-s1-e12">
									<div className="masonry" id="social">
										<SocialCards sources={myRSSFeeds}></SocialCards>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
