//standard imports
import React, {Component} from 'react';

//components
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

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
class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    closeSideDrawer() {
        
        this.setState({
            showSideDrawer: false,
        });
    }

    openSideDrawer() {
        this.setState({
            showSideDrawer: true,
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar barsClicked={() => this.openSideDrawer()}/>
                <SideDrawer show={this.state.showSideDrawer} close={() => this.closeSideDrawer()}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}


export default Layout; 
