import React from 'react';
import QuestionBlock from './QuestionBlock';
import { Consumer } from '../../src/Context';


function Quiz() {
	return (
		<Consumer>
			{(value) => {
                const {start} = value;
				return (
					<div className="text-center">
						<QuestionBlock />
						<button onClick={start} className="btn btn-lg btn-success my-3">Start button</button>
					</div>
				);
			}}
		</Consumer>
	);
}

export default Quiz;
