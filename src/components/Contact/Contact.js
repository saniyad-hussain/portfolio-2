import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	const [formData, setFormData] = useState({});
	const handleBlur = (e) => {
		const newData = { ...formData };
		newData[e.target.name] = e.target.value;
		setFormData(newData);
	};

	const handleSubmit = (e) => {
		console.log(formData);
		e.preventDefault();

		emailjs.sendForm('service_7fibyb8', 'template_q4ffnyc', formData, 'user_vwv2gACW5zeoReEJrIBrX').then((result) => {
			console.log(result.text);
		});
	};
	return (
		<section className="resume-section" id="contact">
			<div className="resume-section-content">
				<h2 className="mb-3">Contact</h2>

				<div className="contact">
					<div className="max-width">
						<div className="row contact-content">
							<div className="col-md-6 column left">
								<div className="text text-primary">Get in Touch</div>
								<div className="social-icons mb-1">
									<div class="social-icons">
										<a class="social-icon" href="https://www.linkedin.com/in/sunyad-hussain/">
											<i class="fab fa-linkedin-in"></i>
										</a>
										<a class="social-icon" href="https://github.com/saniyad-hussain">
											<i class="fab fa-github"></i>
										</a>
										<a class="social-icon" href="facebook.com/chysani">
											<i class="fab fa-facebook-f"></i>
										</a>
									</div>
								</div>
								<div className="icons">
									<div className="row">
										<FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
										<div className="info">
											<div className="head text-primary">Address</div>
											<div className="sub-title">Paterson, NJ, USA</div>
										</div>
									</div>
									<div className="row">
										<FontAwesomeIcon icon={faPhone} className="text-primary" />
										<div className="info">
											<div className="head text-primary">Phone</div>
											<div className="sub-title">+18622874496</div>
										</div>
									</div>
									<div className="row">
										<FontAwesomeIcon icon={faEnvelope} className="text-primary" />
										<div className="info">
											<div className="head text-primary">Email</div>
											<div className="sub-title">chowdhurysaniyad@gmail.com</div>
										</div>
									</div>
								</div>
							</div>
							{/* //contact form */}
							<div className="col-md-6 column right">
								<div className="text text-primary">Message me</div>
								<form action="submit" onSubmit={handleSubmit}>
									<div className="fields">
										<div className="field name">
											<input type="text" name="name" placeholder="Name" onBlur={handleBlur} required />
										</div>
										<div className="field email">
											<input type="email" name="email" placeholder="Email" onBlur={handleBlur} required />
										</div>
									</div>
									<div className="field">
										<input type="text" name="subject" placeholder="Subject" onBlur={handleBlur} required />
									</div>
									<div className="field textarea">
										<textarea cols="30" rows="10" name="message" placeholder="Message.." onBlur={handleBlur} required></textarea>
									</div>
									<div className="button">
										<button type="submit">Send message</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
