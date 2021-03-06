import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import { emailImg, mobileImg } from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';
import toast from 'react-hot-toast';

const Footer = () => {
	const form = useRef();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const sendEmail = (e) => {
		e.preventDefault();

		if (
			formData.name === '' &&
			formData.email === '' &&
			formData.message === ''
		) {
			toast.error('Please fill out form before submitting 👾');
			console.error(form.current);
		} else {
			setLoading(true);

			emailjs
				.sendForm(
					'service_14pp6wl',
					'template_w7ksiel',
					form.current,
					'Lb_qrdpLv6fzP3RIX'
				)
				.then(() => {
					setLoading(false);
					setIsFormSubmitted(true);
				});
		}
	};

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	/*const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};*/

	return (
		<>
			<h2 className="head-text">
				Lets <span>Build</span> Something <span>Beautiful</span> Together
			</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={emailImg} alt="email" />
					<a href="mailto:bagna27@outlook.com" className="p-text">
						bagna27@outlook.com
					</a>
				</div>

				<div className="app__footer-card">
					<img src={mobileImg} alt="mobile" />
					<a href="tel:+233205044521" className="p-text">
						+233 (20) 504-4521
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<form
					ref={form}
					onSubmit={sendEmail}
					className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name *"
							name="name"
							required
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email *"
							name="email"
							value={email}
							required
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message *"
							value={message}
							name="message"
							required
							onChange={handleChangeInput}
						/>
					</div>
					<button type="submit" className="p-text">
						{loading ? 'Sending' : 'Send Message'}
					</button>
				</form>
			) : (
				<div className="thankYou">
					<h3 className="head-text col">
						<span>Thanks for your Message!</span>
						<p>I look forward to doing business</p>
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
