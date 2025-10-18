"use client";

import React, { useEffect } from "react";
import { MicroInteractions } from "@brianwhaley/pixelated-components";

export default function Interactions() {

	useEffect(() => {
		MicroInteractions({ 
			buttonring: true,
			formglow: true,
			imgtwist: true,
			scrollfadeElements: '.callout , .calloutSmall , .carouselContainer',
		});
	}, []);

	return ( <></> );
}