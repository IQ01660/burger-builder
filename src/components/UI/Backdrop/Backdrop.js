import React from 'react';
import classes from './Backdrop.module.css';


const backdrop = (props) => (
    props.show ? <div onClick={props.backdropHandler} className={classes.Backdrop}></div> : null
);

export default backdrop;
