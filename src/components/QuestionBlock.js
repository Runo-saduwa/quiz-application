import React, { Component } from 'react';
import { Consumer } from '../../src/Context';

class QuestionBlock extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { currentQuestion , next} = value;
					return (
						<div>
							<div className="card text-center">
								<div className="card-header">Question</div>
								<div className="card-body">
									<h5 className="card-title">{currentQuestion}</h5>
									<p className="card-text">
										With supporting text below as a natural lead-in to additional content.
									</p>
									<button className="btn btn-primary" onClick={next}>Next Button</button>
								</div>
								<div className="card-footer text-muted">2 days ago</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default QuestionBlock;
