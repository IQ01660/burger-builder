//standard imports
import React, { Component } from 'react';
import Aux from './hoc/Aux';
//importing components and container
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

/**
 * This container is appended
 * to the root element in [index.js]
 */
class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
