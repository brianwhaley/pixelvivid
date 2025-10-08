"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { Callout } from "@brianwhaley/pixelated-components";
import { Carousel } from "@brianwhaley/pixelated-components";
import GalleryWrapper from "@/app/elements/gallerywrapper";
import type { CarouselCardType } from "@brianwhaley/pixelated-components";

export default function Photography() {

	const [ flickrCards, setFlickrCards ] = useState<CarouselCardType[]>([]);
	const props = { 
		tags: "", // "pixelatedviewsgallery"
		method: "flickr.photosets.getPhotos", 
		photoset_id: "72157712416706518",
		photoSize: "Large", 
		callback: setFlickrCards 
	};
	useEffect(() => {
		async function fetchGallery() {
			await GalleryWrapper(props);
		}
		fetchGallery();
	}, []); 
    
	return (
		<>
			<section id="gallery-section">
				<div className="section-container">
					<PageHeader title="PixelVivid Photography" />
					<Carousel 
						cards={flickrCards} 
						draggable={true}
						imgFit="contain" />
				</div>
			</section>

			<div className="section-container">
				<div className="row-4col">
					<Callout
						url="https://secure.istockphoto.com/portfolio/brianwhaley" 
						img='/images/logos/istock-logo.jpg'
						title='iStockPhoto'
						content='I have converted my passion of Landscape, Macro, and Travel Photography 
							into a budding Stock Photography Portfolio.  Check out my work on 
							iStockPhoto or ShutterStock. 
							
							iStock is the original stock content site created by creatives for creatives. 
							They offer unique images and videos that connect with your audience, 
							at prices that fit your budget. Check out my work on iStockPhoto.'
						layout='vertical' 
						shape='squircle' />
					<Callout
						url='http://www.shutterstock.com/g/brianwhaley' 
						img='/images/logos/shutterstock-logo.png'
						title='ShutterStock'
						content='Shutterstock helps creative professionals from all backgrounds 
							and businesses of all sizes produce their best work 
							with incredible content and innovative tools, all on one platform.  
							Check out my work on iStockPhoto.'
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="http://www.blurb.com/user/brianwhaley" 
						img='/images/logos/blurb-logo.png'
						title='Blurb'
						content="Blurb is a self-publishing and marketing platform that unleashes 
							the creative genius inside everyone. 
							Blurb's platform makes it easy to design, publish, promote, and sell 
							professional-quality printed books and ebooks.  
							Check out the books I have published on Blurb."
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="http://brianwhaley.shutterfly.com/" 
						img='/images/logos/shutterfly-logo.png'
						title='ShutterFly'
						content='The Shutterfly family of brands together make up a leading 
							e-commerce company purpose-built for personalized products and custom design. 
							Head over to Shutterfly to see my published books.'
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="http://twitter.com/pixelatedviews" 
						img='/images/logos/x-logo.png'
						title='X (Twitter)'
						content='Twitter, now known as X, is a microblogging and social networking service 
							where users share short text messages, images, and videos.  
							I regularly post on X updates on projects, articles on industry trends, product reviews, 
							cool artists or events, and much more.  '
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="https://500px.com/brianwhaley" 
						img='/images/logos/500px-logo.png'
						title='500px'
						content="500px is a global online platform for photographers to discover, share, and sell their work. 
							It's a community-focused site that allows users to showcase their photography and connect with other creatives. 
							Log into 500px to see my photos and share in the community."
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="http://www.flickr.com/photos/brianwhaley/" 
						img='/images/logos/flickr-logo.png'
						title='Flickr'
						content='Flickr is a free, ad-supported photo-sharing service and online community 
							for photographers, offering a platform to upload, organize, share, and discover photos.
							I use Flickr not only to share and store my photos, 
							i use it as an easy integration into carousels and image hosting. '
						layout='vertical' 
						shape='squircle' />
					<Callout
						url="https://www.instagram.com/pixelated.views/" 
						img='/images/logos/instagram-logo.jpg'
						title='Instagram'
						content="Instagram is a free, online photo and video sharing app and social network platform. 
							It allows users to share photos and videos with their followers, 
							like and comment on posts, and engage in a variety of features 
							like Stories, Reels, and direct messaging. 
							I 'gram, do you?"
						layout='vertical' 
						shape='squircle' />
				</div>
			</div>
		</>
	);
}
