import React, { Component } from 'react';
import { Consumer } from '../../src/Context';

class QuestionBlock extends Component {
	// state = {
	
	// 	option: ''
	// }



	render() {
		return (
			<Consumer>
				{(value) => {
					const { currentQuestion, cont, currentQuestionOptions, handleChange, option } = value;
			
					console.log(option);
					
					return (
						<div>
							<div className="card text-center">
								<div className="card-header">Question</div>
								<div className="card-body">
									<h5 className="card-title">{currentQuestion}</h5>
									<ul class="list-group">
										{currentQuestionOptions ? (
											currentQuestionOptions.map((opt, i) => (
												<li key={i} className="list-group-item">
													<label htmlFor={opt}>
														<input
															type="radio"
															value={opt}
															checked={option === opt }
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
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default QuestionBlock;
