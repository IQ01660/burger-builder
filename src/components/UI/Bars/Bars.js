import React from 'react';
import classes from './Bars.module.css';

const bars = (props) => {
	return (
		<div onClick={props.clicked} className={classes.Bars}>
			<i class="fas fa-bars"></i>
		</div>
	);
};

export default bars;
