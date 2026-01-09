"use client";

import React from "react";
import { ShoppingCart, usePixelatedConfig } from "@pixelated-tech/components";

export default function Cart() {
	const pixelatedConfig = usePixelatedConfig();
	// const sbPayPalApiKey = pixelatedConfig.paypal?.sandboxPayPalApiKey || "";
	// const sbPayPalSecret = pixelatedConfig.paypal?.sandboxPayPalSecret || "";
	const payPalApiKey = pixelatedConfig.paypal?.payPalApiKey || "";
	// const payPalSecret = pixelatedConfig.paypal?.payPalSecret || "";

	return (
		<>
			<section id="cart-section">
				<div className="section-container">
		            <ShoppingCart payPalClientID={payPalApiKey} />
				</div>
			</section>
		</>
	);
}
