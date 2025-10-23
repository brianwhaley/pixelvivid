/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@brianwhaley/pixelated-components";
import { PageSectionHeader } from "@brianwhaley/pixelated-components";
import { getContentfulEntriesByType } from "@brianwhaley/pixelated-components";
import { HubspotTrackingCode /* , getHubspotFormSubmissions */ } from "@brianwhaley/pixelated-components";
import { FormEngine } from "@brianwhaley/pixelated-components";
import { Table } from "@brianwhaley/pixelated-components";
import { Loading, ToggleLoading } from "@brianwhaley/pixelated-components";
import formData from "@/app/data/requestform.json";
import "./requests.css";

export default function Requests() {

	/* MANAGE CUSTOM REQUEST DIALOG */

	async function saveDialog() {
		ToggleLoading({show: true});
		// const sendmail_api = "https://nlbqdrixmj.execute-api.us-east-2.amazonaws.com/default/sendmail";
		const sendmail_api = "https://sendmail.pixelated.tech/default/sendmail";
		const tyDialog = document.getElementById("thankYouDialog") as HTMLDialogElement;
		const myform = document.getElementById("newRequestForm")as HTMLFormElement;
		// e.preventDefault(); // removed to allow hubspot submission
		const myFormData: { [key: string]: any } = {};
		const formData = new FormData(myform as HTMLFormElement);
		for (const [key, value] of formData.entries()) {
			myFormData[key] = value ;
		}
		myFormData.Date = new Date().toLocaleDateString() ;
		myFormData.Status = "Submitted" ;
		await fetch(sendmail_api, {
			method: 'POST',
			mode: 'cors', 
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(myFormData),
		})
			.then((response) => {
				if (response.status !== 200) {
					throw new Error(response.statusText);
				}
				return response.json();
			}); 
		ToggleLoading({show: false});
		myform.reset();
		// mydialog.close();
		tyDialog.showModal();
	}
	
	function closeDialog(id: string) {
		const mydialog = document.getElementById(id) as HTMLDialogElement;
		mydialog.close();
	}

	/* MANAGE CONTENTFUL CUSTOM REQUESTDATA FETCHING */

	type CustomRequestType = {
		name: string;
		source: string;
		description: string; 
		email?: string; // Optional property
		phone?: string; // Optional property
		status: string;
		requestDate: Date;
	};

	const [ customRequests , setCustomRequests ] = useState<CustomRequestType[]>([]);
	const apiProps = {
		base_url: "https://cdn.contentful.com",
		space_id: "soi9w77t7027",
		environment: "master",
		access_token: "muY9LfpCt4qoXosDsnRkkoH3DAVVuUFEuB0WRKRdBUM",
	};
	useEffect(() => {
		async function getCustomRequests() {
			const contentType = "customRequest"; 
			const customRequestEntries = await getContentfulEntriesByType({ apiProps: apiProps, contentType: contentType }); 
			const items = customRequestEntries.items.filter((card: any) => card.sys.contentType.sys.id === contentType);
			const entriesJSON = items.map(function (card: any) {
				return {
					name: card.fields.name,
					source: card.fields.source,
					description: card.fields.description,
					// email: card.fields.email,
					// phone: card.fields.phone,
					status: card.fields.status,
					requestDate: card.fields.requestDate,
				};
			});
			entriesJSON.sort(function (a: any, b: any) { return a.requestDate > b.requestDate ? 1 : -1; });
			setCustomRequests(entriesJSON);
		}
		getCustomRequests();
	}, []);


	/* RENDER THE COMPONENT */

	return (
		<>
			<section id="custom-request-section">
				<div className="section-container">
					<HubspotTrackingCode hubID={"243048355"} />
					<PageHeader title="Request Your Custom Sunglasses" />
					<Loading />
					<div className="newRequestFormWrapper">
						<FormEngine name="newrequest" id="newRequestForm" formData={formData} onSubmitHandler={saveDialog} />
					</div>
					<dialog id="thankYouDialog">
						<PageSectionHeader title="Thank you!" />
						<center>Thank you for your your request.  Your request data has been sent for review.</center>
						<br />
						<center>
							<br /><button type="button" id="closeDialog" onClick={() => closeDialog('thankYouDialog')}>Close</button>
						</center>
					</dialog>
					<br /><br />
				</div>
			</section>

			<section className="section-alt2" id="request-list-section">
				<div className="section-container">
					<PageHeader title="Custom Sunglass Request Work List" />
					{ customRequests.length > 0 ? (
						<Table data={customRequests} id="customRequests" sortable={true}/>
					) : (
						<p>No custom requests found.</p>
					)}
				</div>
			</section>
		</>
	);
}
