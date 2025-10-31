 
"use client";

import React, { useEffect, useState } from 'react';
import { PageHeader } from "@brianwhaley/pixelated-components";
import { FlickrWrapper } from '@brianwhaley/pixelated-components';
import type { CarouselCardType } from "@brianwhaley/pixelated-components";
import { MicroInteractions } from "@brianwhaley/pixelated-components";
import { Tiles } from "@brianwhaley/pixelated-components";

export default function Portfolio() {
	const [ flickrCards, setFlickrCards ] = useState<CarouselCardType[]>([]);
	const props = { 
		api_key: '882cab5548d53c9e6b5fb24d59cc321d',
		user_id: '15473210@N04',
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
				<PageHeader title="PixelVivid Custom Sunglasses Gallery" />
				<Tiles cards={flickrCards} rowCount={3}/>
			</div>
		</section>
	);
    
}
