import React from 'react';
import QuestionBlock from './QuestionBlock';
import { Consumer } from '../../src/Context';


function Quiz() {
	return (
		<Consumer>
			{(value) => {
                const {start, timer, score, hideStart, hideRetake, retake} = value;
				return (
					<div className="text-center">
                        <h6>timer: {timer}s</h6>
                        <h6>score: {score}</h6>
						<QuestionBlock />
						{hideRetake === false ? <button onClick={retake}>Retake Quiz</button>: null}
						{hideStart === false ? <button onClick={start} className="btn btn-lg btn-success my-3">Start button</button> : null}
					</div>
				);
			}}
		</Consumer>
	);
}

export default Quiz;
