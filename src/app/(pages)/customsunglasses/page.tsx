"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { Callout, CalloutHeader, CalloutSmall } from "@brianwhaley/pixelated-components";
import * as CalloutLibrary from "@/app/elements/calloutlibrary";
import { Modal, handleModalOpen } from "@brianwhaley/pixelated-components";
import { Carousel } from "@brianwhaley/pixelated-components";
import GalleryWrapper from "@/app/elements/gallerywrapper";
import type { CarouselCardType } from "@brianwhaley/pixelated-components";

export default function CustomSunglasses() {
	const [modalContent, setModalContent] = useState<React.ReactNode>();
	const handleImageClick = (event: MouseEvent, url: string) => {
		const myContent = <img src={url} alt="Modal Image" />;
		setModalContent(myContent);
		handleModalOpen(event);
  	};

	const [ flickrCards, setFlickrCards ] = useState<CarouselCardType[]>([]);
	const props = { 
		tags: "", // "customsunglasses"
		method: "flickr.photosets.getPhotos", 
		photoset_id: "72177720326925753",
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
			<section id="customs-section">
				<div className="section-container">
					<PageHeader title="Custom Painted Sunglasses by BTW" />
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


			<section className="section" id="customs-section">
				<div className="section-container">
					<CalloutHeader title="Custom Sunglasses Gallery" />
					<Carousel 
						cards={flickrCards} 
						draggable={true}
						imgFit="contain" />
				</div>
				<br />
			</section>




			<section className="section" id="styles-section">
				<div className="section-container">
					<CalloutHeader title="Color Styles" />
					<div className="row-4col">
						<div className="gridItem">
							<Callout
								img='/images/customs/camo-marble.jpg' 
								title='Marbles' 
								content='Customized glasses with mottled streaks of color.  
									Custom marbled paint can be done with a number of complimentary colors, one single color, 
									with metallics, lographic or colorshift paints, or even with clear candy colors.' 
								layout='vertical' 
								shape='round' 
								alt="Marbles" />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/50652292218_3df2a75475_b.jpg'
								img='/images/customs/blue-splatter-3.jpg'
								title='Splatters'
								content='This style is customized with a splash of colors.  
									Custom splatter paint can be one color, or a combination of complimentary colors.  
									Splatters can also be small or large, thin or thick, dense or sparse. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg'
								img='/images/customs/neon-drip.jpg'
								title='Drips'
								content='This style is customized with color dripped all over the frame.  
									Dripping paint can be one color, or a combination of complimentary colors.  
									It can also be done with the drips dense or sparse. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg'
								img='/images/customs/blended-fade.jpg'
								title='Fades'
								content='This style can be used on its own, or as a base for other styles like Drips or Splatters.  
									The fade can be solid colors, metallics, or candy colors.  Candy fades look especially great on clear frames.  
									The fade can be on part of the frame or end-to-end, can be one color or many, translucent or opaque. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg'
								img='/images/customs/green-confetti.jpg'
								title='Confetti'
								content='This style is customized with individual dots of color individually painted all over the frame.  
									The dots paint can be one color, complimentary colors, or any color pattern you choose.  
									It can also be done with confetti dots large or small, and dense or sparse. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg'
								img='/images/customs/fire-red-linear.jpg'
								title='Linears'
								content='This style is customized with individual lines of color individually drawn all over the frame.  
									The lines can paint can be one color, a combination of complimentary colors, or a variety of colors of your preference.  
									It can also be done with the lines dense or sparse. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg'
								img='/images/customs/holo-fade-drip-splatter.jpg'
								title='Your Choice'
								content='Combine styles and colors to create your own custom look - fades, drips, splatters, confetti, marbles, linears, 
									all done in your choice pof paint - neon, metallics, colorshift, holographic, candy clears, and more.  
									Contact us with your ideas and we will work with you to create a one-of-a-kind pair of custom sunglasses. '
								layout='vertical' 
								shape='round' />
						</div><div className="gridItem">
							<Callout
								// url='https://farm66.static.flickr.com/65535/50652294433_b48c9ef0e4_b.jpg'
								img='/images/customs/repair-nose.jpg'
								title='Repairs'
								content='Reinforced with metal strips and glued back together.  
									A new custom coat of paint is recommended after a repair to ensure color match.'
								layout='vertical' 
								shape='round' />
						</div>
					</div>
				</div>
			</section>

			<section className="section" id="examples-section">
				<div className="section-container">
					<CalloutHeader title="Color Examples" />
					<div className="row-6col">
							
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50797219348_a7f5b18dd5_b.jpg" imgclick={handleImageClick} img="/images/customs/black-white-splatter.jpg" alt="Black White Splatter" title="Black & White" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50652292218_3df2a75475_b.jpg" imgclick={handleImageClick} img="/images/customs/blue-splatter-3.jpg" alt="Blue Splatter" title="Winter Blue" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50653036651_8cc8ec0a1c_b.jpg" imgclick={handleImageClick} img="/images/customs/camo-splatter-2.jpg" alt="Camo Splatter" title={"Camo Splatter"} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50664254938_bb746893d0_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-splatter.jpg" alt="Neon Splatter" title="Neon Splatter" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50653037331_449ba8cece_b.jpg" imgclick={handleImageClick} img="/images/customs/blue-marble.jpg" alt="Blue Marble" title={"Cobalt / Planet X"} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50653126162_1479ff31f5_b.jpg" imgclick={handleImageClick} img="/images/customs/camo-marble.jpg" alt="Camo Marble" title={"Camo Marble"} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50755818913_37cdca4924_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-marble.jpg" alt="Neon Marble" title="Neon Marble" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51152648154_918278d13f_b.jpg" imgclick={handleImageClick} img="/images/customs/blue-clear-drip.jpg" alt="Blue Frost Clear Drip" title="Blue Frost" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51152648149_1194b3d58d_b.jpg" imgclick={handleImageClick} img="/images/customs/green-gold-drip-2.jpg" alt="Irish Green Gold Drip" title="Irish Gold" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50920141601_54c8c15e8f_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-marble-clear.jpg" alt="Neon Marble Candy Clear" title={"Neon Candy"} content={""} />
						</div>

						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51370100893_fc70898a3d_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-splatter-3.jpg" alt="Neon Splatter" title="Neon Splatter" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/53229618619_16517610cd_b.jpg" imgclick={handleImageClick} img="/images/customs/blended-fade.jpg" alt="Blended Fade" title="Blended" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/54784796846_b4d78b2392_b.jpg" imgclick={handleImageClick} img="/images/customs/galaxy.jpg" alt="Galaxy" title="Galaxy" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51272602619_d46db46cff_b.jpg" imgclick={handleImageClick} img="/images/customs/red-white-blue-splatter.jpg" alt="Red White Blue Splatter" title="Red White Blue" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/54594687134_161df8ef6f_b.jpg" imgclick={handleImageClick} img="/images/customs/rainbow-confetti.jpg" alt="Rainbow Confetti" title="Rainbow Confetti" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/52463376820_6fc4201c0a_b.jpg" imgclick={handleImageClick} img="/images/customs/colorshift-fade.jpg" alt="ColorShift Fade" title="ColorShift" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/52193578261_1ccec2384e_b.jpg" imgclick={handleImageClick} img="/images/customs/vintage-blue.jpg" alt="Vintage Mumbo Blue" title="Vintage Mumbo Blue" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/52235792754_f5309d7d08_b.jpg" imgclick={handleImageClick} img="/images/customs/vintage-yellow.jpg" alt="Vintage Mumbo Yellow" title="Vintage Mumbo Yellow" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/52253164864_3974441ee9_b.jpg" imgclick={handleImageClick} img="/images/customs/vintage-pink.jpg" alt="Vintage Mumbo Pink" title="Vintage Mumbo Pink" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51062706291_097827a69d_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-drip.jpg" alt="Neon Drip Candy Stripe" title="Candy Stripe" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51025141073_903dab34df_b.jpg" imgclick={handleImageClick} img="/images/customs/black-rain.jpg" alt="Black Rain" title="Black Rain" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51154097191_bbff7101f7_b.jpg" imgclick={handleImageClick} img="/images/customs/neon-tiger-stripe.jpg" alt="Neon Tiger Stripe" title="Neon Tiger" content={""} />
						</div>

						{/* 
						<div className="gridItem">
							<CalloutSmall url="" imgclick={handleImageClick} img="/images/customs/btw-signature.jpg" alt="Black Gold" title="Black Gold" content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="" imgclick={handleImageClick} img="/images/customs/btw-signature.jpg" alt="Halloween" title="Halloween" content={""} />
						</div>
						*/}

						{/* 
						===== Additional Examples =====
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50797971781_69834d1b6f_b.jpg" imgclick={handleImageClick} img="/images/customs/brown-splatter.jpg" alt="Brown Splatter" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50756659327_c4ca8fdb52_b.jpg" imgclick={handleImageClick} img="/images/customs/gold-silver-splatter-2.jpg" alt="Gold Silver Splatter" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50685248287_3e8ebe5201_b.jpg" imgclick={handleImageClick} img="/images/customs/green-splatter.jpg" alt="Green Splatter" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50652294433_b48c9ef0e4_b.jpg'" imgclick={handleImageClick} img="/images/customs/repair-nose.jpg" alt="Repair Nose" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51202265371_9830735bb9_b.jpg" imgclick={handleImageClick} img="/images/customs/blue-drip.jpg" alt="Blue Drip" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/50961082721_cb3bc6daf7_b.jpg" imgclick={handleImageClick} img="/images/customs/camo-drip-2.jpg" alt="Camo Drip" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51062790717_0e1496d383_b.jpg" imgclick={handleImageClick} img="/images/customs/red-drip.jpg" alt="Red Drip" title={""} content={""} />
						</div>
						<div className="gridItem">
							<CalloutSmall url="https://farm66.static.flickr.com/65535/51203329450_38d7a8bf74_b.jpg" imgclick={handleImageClick} img="/images/customs/red-white-blue-drip.jpg" alt="Red White Blue Drip" title={""} content={""} />
						</div>
						*/}

					</div>
				</div>
			</section>

			<Modal modalContent={modalContent} />

		</>
	);
}
