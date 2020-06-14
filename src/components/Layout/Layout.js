//standard imports
import React from 'react';

//css module imports
import classes from './Layout.module.css';

//hoc imports
import Aux from './../../hoc/Aux';

/**
 * This component describes the overall layout
 * including navbar
 * and goes into the App container in [App.js]
 * @param {*} props 's children are put into <main> tag
 */
const layout = (props) => (
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default layout;
