import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './../../Logo/Logo';
import NavItems from './../NavItems/NavItems';
import Bars from './../../UI/Bars/Bars';

const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.MobileOnly}>
            <Bars clicked={props.barsClicked}/>
        </div>
        
        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavItems isVertical={false}/>
        </nav>
    </header>
);

export default toolBar
