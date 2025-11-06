"use client";

import React, { useEffect } from "react";
import { loadAllImagesFromCloudinary } from "@brianwhaley/pixelated-components";
import { deferAllCSS } from "@brianwhaley/pixelated-components";
import { preloadImages } from "@brianwhaley/pixelated-components";


export default function LayoutPerformance() {
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', deferAllCSS);
		preloadImages();
		// deferAllCSS();
		loadAllImagesFromCloudinary({ 
			origin: window.location.origin,
			product_env: "dlbon7tpq"
		});
	}, []);
	return ( <></> );
}
