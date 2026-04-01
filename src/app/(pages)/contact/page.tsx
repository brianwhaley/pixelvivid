"use client";

import React, { useEffect, useState } from "react";
import { PageTitleHeader } from "@pixelated-tech/components";
import { FormEngine } from "@pixelated-tech/components";
import { emailFormData } from "@pixelated-tech/components";
import { Loading, ToggleLoading } from "@pixelated-tech/components";
import { Modal, handleModalOpen } from "@pixelated-tech/components";

import formData from "@/app/data/contactform.json";
import routes from "@/app/data/routes.json";
const siteInfo = (routes as any).siteInfo;

export default function Contact() {

	const myContent = <div className="centered"><br /><br />Thank you for contacting us!<br />We will get back to you as soon as we can.<br /><br /><br /></div>;
	const [modalContent /* , setModalContent */ ] = useState(myContent);

	function handleSubmit(e: Event) {
		ToggleLoading({show: true});
		emailFormData(e, postSubmit);
	}

	function postSubmit(e: Event) {
		handleModalOpen(e as MouseEvent);
		ToggleLoading({show: false});
		const myForm = e.target as HTMLFormElement;
		myForm.reset();
	}
	
	useEffect(() => {
		const form = document.getElementById("contactUsForm") as HTMLFormElement;
		if (form) {
			const submitbutton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
			const submitDiv = submitbutton.parentElement as HTMLDivElement;
			if(submitDiv) {
				submitDiv.style.textAlign = "center";
				submitDiv.style.margin = "20px auto";
			}
		}
	}, []);

	return (
		<>
			<PageTitleHeader title="Contact Us" />
			<section className="" id="contactus-section">
				<div className="section-container">
					<div className="row-12col">
						<div className="grid-s4-e10">
							<div>
								Please fill out the form below. 
								We would LOVE to hear about your experience with PixelVivid products 
								or answer any questions, concerns, or requests you may have.  
								<br /><br /><br /><br />
							</div>
							<FormEngine 
								name="contactUs" 
								id="contactUsForm" 
								formData={formData} 
								onSubmitHandler={handleSubmit} 
							/>
							<div><br /><br /></div>
							<div>
								You can also contact us directly:<br /><br />
								<h3>Address:</h3>
								<p>
									<a href="https://maps.app.goo.gl/2bD1zr43i5CmkfAk7" target="_blank" rel="noopener noreferrer">
										{siteInfo.address.streetAddress}, {siteInfo.address.addressLocality}, {siteInfo.address.addressRegion} {siteInfo.address.postalCode}
									</a>
								</p>
								<h3>Email:</h3>
								<p><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
								<h3>Phone:</h3>
								<p><a href={`tel:${siteInfo.telephone}`}>{siteInfo.telephone}</a></p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Loading />
			<Modal modalContent={modalContent} />
		</>
	);
}
