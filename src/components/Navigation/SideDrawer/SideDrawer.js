import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from './../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    const drawerClasses = [classes.SideDrawer, classes.Open]
    if(!props.show) {
        drawerClasses.pop();
        drawerClasses.push(classes.Close);
    }
	return (
		<>
			<Backdrop show={props.show} backdropHandler={props.close}/>
			<div className={drawerClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavItems isVertical={true} />
				</nav>
			</div>
		</>
	);
};

export default sideDrawer;
