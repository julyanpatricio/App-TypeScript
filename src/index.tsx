import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App'; // Importante no poner la extensión .tsx sino arrojara un error
import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<App title='henry workshop'/>
	</Provider>,
	document.querySelector('#root')
);
