"use client";

import React from "react";
import { ShoppingCart } from "@brianwhaley/pixelated-components";
import { getFullPixelatedConfig } from "@brianwhaley/pixelated-components";

const pixelatedConfig = getFullPixelatedConfig();

// const sbPayPalApiKey = pixelatedConfig.paypal?.sandboxPayPalApiKey || "";
// const sbPayPalSecret = pixelatedConfig.paypal?.sandboxPayPalSecret || "";
const payPalApiKey = pixelatedConfig.paypal?.payPalApiKey || "";
// const payPalSecret = pixelatedConfig.paypal?.payPalSecret || "";

export default function Cart() {
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
