import React from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { experience, skill } from '../data';

const Skills = () => {
	return (
		<>
			<h2 className="head-text">
				Skills <span>And</span> Experience
			</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skill.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}>
							<div
								className="app__flex"
								/*style={{ backgroundColor: skill.bgColor }}*/
							>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="app__skills-exp">
					{experience?.map(({ id, year, work }) => (
						<motion.div className="app__skills-exp-item" key={id}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{year}</p>
							</div>

							<motion.div className="app__skills-exp-works">
								<>
									<motion.div
										whileInView={{ opacity: [0, 1] }}
										transition={{ duration: 0.5 }}
										className="app__skills-exp-work"
										data-tip
										data-for={work.company}
										key={work.company}>
										<h4 className="bold-text">{work.name}</h4>
										<p className="p-text">{work.company}</p>
									</motion.div>
									<ReactToolTip
										id={work.company}
										effect="solid"
										arrowColor="#fff"
										className="skills-tooltip">
										{work.desc}
									</ReactToolTip>
								</>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'skills',
	'app__whitebg'
);
