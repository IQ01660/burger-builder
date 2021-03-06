import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    } 

	render() {
		return (
			<>
				<Backdrop backdropHandler={this.props.backdropHandler} show={this.props.show} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0',
					}}
				>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Modal;
