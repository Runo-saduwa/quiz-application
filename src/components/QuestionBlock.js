import React, { Component } from 'react';
import { Consumer } from '../../src/Context';

class QuestionBlock extends Component {

	render() {
		return (
			<Consumer>
				{(value) => {
					const { currentQuestion, cont, currentQuestionOptions, handleChange, option, hideQuiz } = value;

					console.log(option);
					let quizBlock;

					if (hideQuiz) {
						quizBlock = null;
					} else {
						quizBlock = (
							<div className="card text-center">
								<div className="card-header">Question</div>
								<div className="card-body">
									<h5 className="card-title">{currentQuestion}</h5>
									<ul className="list-group">
										{currentQuestionOptions ? (
											currentQuestionOptions.map((opt, i) => (
												<li key={i} className="list-group-item">
													<label htmlFor={opt}>
														<input
															type="radio"
															value={opt}
															checked={option === opt}
															onChange={handleChange}
														/>
														{opt}
													</label>
												</li>
											))
										) : null}
									</ul>
									<button className="btn btn-primary" onClick={cont}>
										Next Button
									</button>
								</div>
							</div>
						);
					}

					return <div>{quizBlock}</div>;
				}}
			</Consumer>
		);
	}
}

export default QuestionBlock;
