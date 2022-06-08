import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a
					href="https://www.linkedin.com/in/bagna-farouk-omar-947752104/"
					target="_blank"
					rel="noreferrer">
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a
					href="https://instagram.com/frontendbagna?utm_medium=copy_link"
					target="_blank"
					rel="noreferrer">
					<FaInstagram />
				</a>
			</div>
			<div>
				<a href="https://github.com/omarbagna" target="_blank" rel="noreferrer">
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
