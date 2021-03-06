import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul className = {[classes.NavItems, props.isVertical ? classes.Vertical : ''].join(" ")}>
        <NavItem link="/" active={true}>Burger Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </ul>
);

export default navItems;