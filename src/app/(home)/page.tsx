"use client";

import React from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { Callout, CalloutHeader } from "@brianwhaley/pixelated-components";
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
						<Callout
							url='/customsunglasses' 
							img='/images/customs/blue-splatter-3.jpg'
							title='Customized Sunglasses'
							content='PixelVivid sunglasses offer a wide variety of 
								activewear sunglasses with color splashed, marbled, splattered, 
								dripped and pixeled! Oakley frames are our favorite glasses 
								to paint but we can paint on almost any brand. '
							layout='vertical' />
						<Callout
							url='/photography' 
							img='https://farm6.staticflickr.com/5682/21652998256_7c5d0ce495_b.jpg'
							title='Stock Photography'
							content='I have converted my passion of Landscape, Macro, and Travel Photography 
								into a budding Stock Photography Portfolio.  Check out my work on 
								iStockPhoto or ShutterStock, or see my books on Blurb or Shutterfly. '
							layout='vertical' />
						{ /* <Callout
							url='/homedesign' 
							img='https://farm66.static.flickr.com/65535/54513221006_5d2117cdf3_b.jpg'
							title='Home Design & Remodeling'
							content='We design a holistic plan for interior and exterior design of homes,
								including kitchens, bathrooms, bedrooms, color schemes, artwork, garages, patios, decks, and more.'
							layout='vertical' /> */ }
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
								including 500px, Ancestry, my Blog, Blurb, eBay, Etsy, Facebook, Flickr, Goodreads,
								Instagram, iStock Photo, LinkedIn, Pinterest, Reddit, Shutterfly, Shutterstock, 
								Twitter, Tumblr, Youtube, and more.
								Check out the use of RSS feeds and APIs to generate dynamic cards on the page
								using my React component library.
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
							<Callout
								url='/store'
								img='/images/customs/neon-splatter.jpg'
								title='Custom Sunglasses Store'
								content='View some cutomized Oakley sunglasses available for purchase.'
								layout='vertical' />
						</div>
						<div className="gridItem">
							<Callout
								url='/subscribe'
								img='/images/icons/email-icon.png'
								title='Subscribe'
								content='Subscribe for updates and announcements about new products, launches, events, and upcoming drops.'
								layout='vertical' />
						</div>
						<div className="gridItem">
							<Callout
								url='/request'
								img='/images/icons/request-icon.jpg'
								title='Special Sunglass Orders'
								content='Pixelvivid can co-create a personalized pair of 
									really cool sunglasses with you! The artistic design of 
									your sunglasses can include one color, or a combination of 
									complimentary colors. Paint designs can be smaller or larger, 
									thin or thick, dense or sparse. Your special order sunglasses 
									are personal and vivid!'
								layout='vertical' />
						</div>
						
					</div>
				</div>
			</section>
		</>
	);
}
