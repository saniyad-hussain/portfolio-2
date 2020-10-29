import React from 'react';
import '../src/css/styles.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<Router>
			<Route>
				<Switch path="/">
					<Main />
				</Switch>
				<Switch path="/projects">
					<Projects />
				</Switch>
			</Route>
		</Router>
	);
}

export default App;
