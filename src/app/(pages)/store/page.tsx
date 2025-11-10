"use client";

import React from "react";
import { ContentfulItems, EbayItems } from "@brianwhaley/pixelated-components";
import { PageHeader } from "@brianwhaley/pixelated-components";

export default function Ebay() {
	const ebayApiProps = {
		proxyURL: "https://proxy.pixelated.tech/prod/proxy?url=",
		// qsSearchURL: '?q=sunglasses&fieldgroups=full&category_ids=79720&aspect_filter=categoryId:79720&filter=sellers:{pixelatedtech}&sort=newlyListed&limit=200',
		qsSearchURL: '?q=sunglasses&fieldgroups=FULL&category_ids=79720&aspect_filter=categoryId:79720&filter=sellers:{pixelatedtech}&sort=newlyListed&limit=200',
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
			<section id="ebay-section">
				<div className="section-container">
					<PageHeader title="Custom Sunglasses For Sale" />
					<ContentfulItems apiProps={contentfulApiProps} cloudinaryProductEnv={cloudinaryProductEnv} />
					<EbayItems apiProps={ebayApiProps} cloudinaryProductEnv={cloudinaryProductEnv} />
				</div>
			</section>
		</>
	);
}
