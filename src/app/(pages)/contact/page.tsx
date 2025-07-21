"use client";

import React, { useEffect, useState } from "react";
import { PageHeader } from "@/app/components/general/pixelated.general";
import { FormEngine } from "@brianwhaley/pixelated-components";
import { emailFormData } from "@brianwhaley/pixelated-components";
import { Loading, ToggleLoading } from "@brianwhaley/pixelated-components";
import { Modal, handleModalOpen } from "@brianwhaley/pixelated-components";

import formData from "@/app/data/contactform.json";

export default function Contact() {

	const [modalContent, setModalContent] = useState<React.ReactNode>();
	useEffect(() => {
		const myContent = <div className="centered"><br /><br />Thank you for contacting us!<br />We will get back to you as soon as we can.<br /><br /><br /></div>;
		setModalContent(myContent);
	}, []);

	function handleSubmit(e: Event) {
		ToggleLoading({show: true});
		emailFormData(e, postSubmit);
	}

	function postSubmit(e: Event) {
		// alert("Thank you for contacting us! We will get back to you as soon as we can.");
		handleModalOpen(e as MouseEvent);
		ToggleLoading({show: false});
		const myForm = e.target as HTMLFormElement;
		myForm.reset();
	}
	
	useEffect(() => {
		const form = document.getElementById("contactusForm") as HTMLFormElement;
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
			<PageHeader title="Contact Us" />
			<section className="" id="contactus-section">
				<div className="section-container">
					<div className="row-12col">
						<div className="grid-s4-e6">
							<div>
								Please fill out the form below. 
								We would LOVE to hear about your experience with PixelVivid products 
								or answer any questions, concerns, or requests you may have.  
								<br /><br /><br /><br />
							</div>
							<FormEngine 
								name="contactUs" 
								id="contactusForm" 
								formData={formData} 
								onSubmitHandler={handleSubmit} 
							/>
							<div><br /><br /></div>
							<div>
								You can also contact us directly using our email address:<br />
								<a href="mailto:contactus@pixelvivid.com">contactus@pixelvivid.com</a>
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
