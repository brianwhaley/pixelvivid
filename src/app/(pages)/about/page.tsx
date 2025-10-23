"use client";

import React from "react";
import { PageHeader } from "@brianwhaley/pixelated-components";
import { Callout } from "@brianwhaley/pixelated-components";
import * as CalloutLibrary from "@/app/elements/calloutlibrary";

export default function About() {
	return (
		<>
			<section id="aboutus-section">
				<div className="section-container">
					<PageHeader title="About PixelVivid" />
					<div className="row-1col">
						<div className="gridItem">
							<Callout 
								layout='horizontal'
								img='/images/customs/btw-mas.jpg'
								imgShape="squircle"
								title='Brian and Mary Ann'
								content='PixelVivid was born during the COVID Pandemic. 
										In the days of solitude and separation, Brian reconnected with his past 
										through a pair of Oakley Sunglasses. In those early moments, a spark 
										was lit that would grow over time. Now, with the help of Mary Ann, 
										old boring sunglasses are given a second life, with bold vivid colors 
										and an array of styles unique to each customer. Together we are 
										expanding our line of sunglasses to include our own frames, 
										as well as other product lines. Keep your eyes out for lots more to come from us! ' />
						</div>
						<div className="gridItem">
							<Callout
								layout='horizontal'
								direction='left'
								img='/images/customs/green-confetti.jpg'
								imgShape="squircle"
								title='A bit about our sunglasses'
								content='Each pair of our creative upcycled sunglasses are carefully selected and prepared 
										before beginning the creative process. Once prepped to receive the paint, each pair of 
										sunglasses are styled using high-end automotive paints from House of Kolor. 
										Once all the colors are applied, each pair of sunglasses are sprayed 
										with a two-stage gloss clear coat to protect them. Once hardened for 5 to 7 days, 
										each creative upcycled sunglasses are fitted with new polarized lenses, ear socks, 
										and any other rubber bits on the frame. The last step in the process is for 
										the designer to sign their work. Each pair is unique, earth-friendly, and fun!' />
						</div>
						<CalloutLibrary.sustainabilityMessage />
					</div>
				</div>
			</section>
		</>
	);
}
