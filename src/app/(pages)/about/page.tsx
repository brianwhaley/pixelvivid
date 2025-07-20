"use client";

import React from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { Callout } from "@brianwhaley/pixelated-components";

export default function About() {
	
	return (
		<>
			<section id="aboutus-section">
				<div className="section-container">
					<PageHeader title="About Pixelvivid" />
					<div className="row-12col">

						<div className="grid-s1-e1" />

						
						<div className="grid-s2-e5"> 

							<div className="gridItem">
								<Callout
									img='/images/customs/btw-mas.jpg'
									title='Brian and Mary Ann'
									content='PixelVivid was born from the time of the COVID Pandemic.  
									In the days of solitude and separation, Brian reconnected with his past 
									through a pair of Oakley Sunglasses.  In those early moments, a spark was lit
									that would grow over time.  Now, with the help of Mary Ann, old boring sunglasses
									are given a second life, with bold vivid colors and 
									an array of styles unique to each customer.  Together we are expanding 
									our line of sunglasses to include our own frames, as well as other product lines.  
									Keep your eyes out for lots more to come from us.' 
									layout='vertical' />
							</div>

						</div>

						<div className="grid-s7-e5">

							<div className="gridItem">
								<Callout
									img='/images/customs/green-confetti.jpg'
									title='A bit about our sunglasses'
									content='Each pair of our upcycled sunglasses are carefully selected 
									and prepared before beginning.  Once prepped to receive the paint, 
									each pair of sunglasses are styled using quality inks, paint markers, 
									or high end automotive paints from House of Kolor.  
									Once all the colors are applied, each pair of sunglases are 
									sprayed with a two stage gloss show clear coat to protect them.  
									Once hardened for 5 to 7 days, each upcycled sunglasses are fitted with 
									new polarized lenses, ear socks, and any other rubber bits on the frame.  
									The last step in the process is for the designer to sign their work.'
									layout='vertical' />
							</div>

						</div>


						<div className="grid-s12-e1" />

					</div>
				</div>
			</section>

		</>
	);
}
