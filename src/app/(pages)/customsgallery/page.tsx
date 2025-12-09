 
"use client";

import React, { useEffect, useState } from 'react';
import { PageTitleHeader } from "@pixelated-tech/components";
import { FlickrWrapper } from '@pixelated-tech/components';
import type { CarouselCardType } from "@pixelated-tech/components";
import { MicroInteractions } from "@pixelated-tech/components";
import { Tiles } from "@pixelated-tech/components";
import { getFullPixelatedConfig } from '@pixelated-tech/components';

const pixelatedConfig = getFullPixelatedConfig();

export default function Portfolio() {
	const [ flickrCards, setFlickrCards ] = useState<CarouselCardType[]>([]);
	const props = { 
		api_key: pixelatedConfig.flickr?.urlProps.api_key || "",
		user_id: pixelatedConfig.flickr?.urlProps.user_id || "",
		tags: "", // "customsunglasses"
		method: "flickr.photosets.getPhotos", 
		photoset_id: "72177720326925753",
		photoSize: "Large", 
		callback: setFlickrCards 
	};
	useEffect(() => {
		async function fetchGallery() {
			await FlickrWrapper(props);
		}
		fetchGallery();
	}, []); 
	useEffect(() => {
		MicroInteractions({ 
			scrollfadeElements: '.tile',
		});
	}, [flickrCards]); 
	return ( 
		<section id="portfolio-section">
			<div className='section-container'>
				<PageTitleHeader title="PixelVivid Custom Sunglasses Gallery" />
				<Tiles cards={flickrCards} rowCount={3}/>
			</div>
		</section>
	);
    
}
