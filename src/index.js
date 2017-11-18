import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';

// import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render((
	<Router>
		<Route exact path="/" component={App}></Route>
	</Router>
	), document.getElementById('root'));
// registerServiceWorker();
