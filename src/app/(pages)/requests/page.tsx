/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { CalloutHeader } from "@brianwhaley/pixelated-components";
import { HubspotTrackingCode /* , getHubspotFormSubmissions */ } from "@brianwhaley/pixelated-components";
import { FormEngine } from "@brianwhaley/pixelated-components";
import { Table } from "@brianwhaley/pixelated-components";
import { Loading, ToggleLoading } from "@brianwhaley/pixelated-components";
import requestData from "@/app/data/requests.json";
import formData from "@/app/data/requestform.json";
import "./requests.css";

export default function Requests() {

	async function saveDialog(){
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

	useEffect(() => {
		/* getHubspotFormSubmissions(
			{
				proxyURL: "https://proxy.pixelated.tech/prod/proxy?url=",
				formGUID: "7e9a928d-7905-4acf-9f07-c3db3a48619b", 
				apiToken: "pat" + "-" + "na2" + "-" + "430684d2" + "-" + "d9e6-4969" + "-" + "acf8-5eee77c27aee"
			})
			.then((data)=>{
				console.log(data);
				const requests = data.results.map((item: any) => ({
					Name: item.values.find((value: { name: string; }) => value.name === "firstname").value + 
						" " + item.values.find((value: { name: string; }) => value.name === "lastname").value,
					Email: item.values.find((value: { name: string; }) => value.name === "email").value,
					Source: item.values.find((value: { name: string; }) => value.name === "source").value,
					"Request": item.values.find((value: { name: string; }) => value.name === "message").value,
					"Date": item.submittedAt,
				}));
				console.log(requests);
			}); */
		const submitModalButton = document.getElementById('newRequestFormSubmit');
		const closeModalButton = document.getElementById('newRequestFormClose');
		if (submitModalButton) {
			submitModalButton.addEventListener('click', function() {
				saveDialog();
			});
		}
		if (closeModalButton) {
			closeModalButton.addEventListener('click', function() {
				closeDialog('newRequestDialog');
			});
		}
	}, []);

	return (
		<>
			<section id="custom-request-section">
				<div className="section-container">
					<HubspotTrackingCode hubID={"243048355"} />
					<PageHeader title="Request Your Custom Sunglasses" />
					<Loading />
					<div className="newRequestFormWrapper">
						<FormEngine name="newrequest" id="newRequestForm" formData={formData} />
					</div>
					<dialog id="thankYouDialog">
						<CalloutHeader title="Thank you!" />
						<center>Thank you for your your request.  Your request data has been sent for review.</center>
						<br />
						<center>
							<br /><button type="button" id="closeDialog" onClick={() => closeDialog('thankYouDialog')}>Close</button>
						</center>
					</dialog>
					<br /><br />
				</div>
			</section>

			<section id="request-list-section">
				<div className="section-container">
					<PageHeader title="Custom Sunglass Request Work List" />
					<Table data={requestData} id="customRequests" sortable={true}/>
				</div>
			</section>
		</>
	);
}
