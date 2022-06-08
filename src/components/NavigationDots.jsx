import React from 'react';

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
				(item, index) => (
					<a
						href={`#${item}`}
						key={item + index}
						className="app__navigation-dot"
						aria-hidden="true"
						style={
							active === item
								? { backgroundColor: 'var(--purple-color)', width: '45px' }
								: {}
						}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
