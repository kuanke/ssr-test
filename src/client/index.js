import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
import routes from '../Routes';

const App = () => {
	return (
		<Provider store={getClientStore()} >
			<BrowserRouter>
				{routes.map(item => (
					<Route {...item} />
				))}
			</BrowserRouter>
		</Provider>
	)
};

ReactDom.hydrate(<App />, document.getElementById('root'))