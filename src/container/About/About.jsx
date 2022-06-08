import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { abouts } from '../data';

const About = () => {
	return (
		<>
			<div id="about">
				<h2 className="head-text">
					I Know That
					<span> Good Apps</span>
					<br />
					means
					<span> Good Business</span>
				</h2>

				<div className="app__profiles">
					{abouts.map(({ id, imgUrl, title, content }) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className="app__profile-item"
							key={title + id}>
							<img src={imgUrl} alt={title} />
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{content}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg'
);
