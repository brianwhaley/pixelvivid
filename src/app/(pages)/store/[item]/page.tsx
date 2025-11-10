"use client";

import React, { use } from 'react';
import { EbayItemDetail } from "@brianwhaley/pixelated-components";
import { ContentfulItemDetail } from "@brianwhaley/pixelated-components";
const debug = false;

// EBAY ITEM ID = 12 DIGIT AND NUMERIC ONLY
// CONTENTFUL ITEM ID = 1 - 64 CHARACTERS, ALPHANUMERIC (entry ids seem to be 22 characters)


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumeric(value: any) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}

export default function EbayItem({params}: { params: Promise<{ item: string }> }){
	const { item } = use(params);
	if (debug) console.log(item);
	const ebayApiProps = {
		proxyURL: "https://proxy.pixelated.tech/prod/proxy?url=",
		qsItemURL: `/v1|${item}|0?fieldgroups=PRODUCT,ADDITIONAL_SELLER_DETAILS`,
		appId: 'BrianWha-Pixelate-PRD-1fb4458de-1a8431fe', // clientId
		appCertId: 'PRD-fb4458deef01-0d54-496a-b572-a04b', // clientSecret
		tokenScope: 'https://api.ebay.com/oauth/api_scope',
		globalId: 'EBAY-US',
	};
	const contentfulApiProps = {
		proxyURL: 'https://proxy.pixelated.tech/prod/proxy?url=',
		base_url: "https://cdn.contentful.com",
		space_id: "soi9w77t7027",
		environment: "master",
		access_token: "muY9LfpCt4qoXosDsnRkkoH3DAVVuUFEuB0WRKRdBUM",
	};
	const cloudinaryProductEnv = "dzjibwmev"; // Cloudinary environment for product images
	return (
		<>
			<section id="ebay-item-section">
				<div className="section-container">
					{ isNumeric(item) && item.length == 12 
						? <EbayItemDetail 
							apiProps={ebayApiProps} 
							itemID={item} 
							cloudinaryProductEnv={cloudinaryProductEnv} 
						/>
						: <ContentfulItemDetail 
							apiProps={contentfulApiProps} 
							entry_id={item} 
							cloudinaryProductEnv={cloudinaryProductEnv} 
						/> 
					}
				</div>
			</section>
		</>
		
	);
}
