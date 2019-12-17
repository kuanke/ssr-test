import React from 'react';
import {StaticRouter, Route} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';


export const render = (store, routes, req) => {
	const content = renderToString((
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				{routes.map(route => (
					<Route {...route}/>
				))}
			</StaticRouter>
		</Provider>
	));
	return `
		<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.context = {
					    state: ${JSON.stringify(store.getState())}
					}
				</script>
				<script src='/index.js'></script>
			</body>
		</html>
  	`;
}