"use client";

import React from "react";
import { ShoppingCart } from "@pixelated-tech/components";
import { getFullPixelatedConfig } from "@pixelated-tech/components/server";

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
