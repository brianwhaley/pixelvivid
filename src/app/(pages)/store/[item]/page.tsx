"use client";

import React, { use } from 'react';
import { EbayItemDetail } from "@pixelated-tech/components";
import { ContentfulItemDetail } from "@pixelated-tech/components";
import { getFullPixelatedConfig } from "@pixelated-tech/components/server";

const pixelatedConfig = getFullPixelatedConfig();
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
		proxyURL: pixelatedConfig.ebay?.proxyURL || '',
		qsItemURL: `/v1|${item}|0?fieldgroups=PRODUCT,ADDITIONAL_SELLER_DETAILS`,
		appId: pixelatedConfig.ebay?.appId || '', // clientId
		appCertId: pixelatedConfig.ebay?.appCertId || '', // clientSecret
		tokenScope: pixelatedConfig.ebay?.tokenScope || '',
		globalId: pixelatedConfig.ebay?.globalId || 'EBAY-US',
	};
	const contentfulApiProps = {
		proxyURL: pixelatedConfig.contentful?.proxyURL || '',
		base_url: pixelatedConfig.contentful?.base_url || "",
		space_id: pixelatedConfig.contentful?.space_id || "",
		environment: pixelatedConfig.contentful?.environment || "",
		delivery_access_token: pixelatedConfig.contentful?.delivery_access_token || "",
	};
	const cloudinaryProductEnv = pixelatedConfig.cloudinary?.product_env || ""; // Cloudinary environment for product images
	
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
