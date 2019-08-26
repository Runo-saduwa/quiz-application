import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from '../src/Context';
import Quiz from './components/Quiz';

import './App.css';

function App() {
	return (
		<Provider>
			<Quiz />
		</Provider>
	);
}

export default App;
