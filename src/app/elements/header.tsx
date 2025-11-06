"use client";

import React from "react";

// import { MenuAccordionButton } from "../components/menu/pixelated.menu-accordion";
import { MenuAccordionButton } from "@brianwhaley/pixelated-components";
import { CartButton } from "@brianwhaley/pixelated-components";
import "./header.css";

export default function Header() {
	// DIRTY FIX FOR CSS DEFER AND ACCORDION MENU
	// copied from pixelated-components/src/shoppingcart/pixelated.shoppingcart.css
	const customCSS = `
      	#pixCartButton.pixCartButton img {
			width: 20px;
		}
    `;
	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: customCSS }} />
			<div className="section-container">
				<MenuAccordionButton />
				<h2 className="pull-left pad textOutline">PixelVivid</h2>
				<div className="right">
					<CartButton href={'/cart'} />
				</div>
			</div>
		</>
	);
}
