import React from 'react';
import QuestionBlock from './QuestionBlock';
import { Consumer } from '../../src/Context';


function Quiz() {
	return (
		<Consumer>
			{(value) => {
                const {start, timer, score} = value;
				return (
					<div className="text-center">
                        <h6>timer: {timer}s</h6>
                        <h6>score: {score}</h6>
						<QuestionBlock />
						<button onClick={start} className="btn btn-lg btn-success my-3">Start button</button>
					</div>
				);
			}}
		</Consumer>
	);
}

export default Quiz;
