import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
	state = {
		questions: [
			{
				question: 'JavaScript was developed in what year?',
				options: [ '1995', '1960', '2019', '1985', '1991' ],
				answer: '1905',
				answered: false
			},
			{
				question: 'Ryan Dahl invented?',
				options: [ 'Python', 'Node.js', 'Vscode', 'React.js', 'Angular' ],
				answer: 'Node.js',
				answered: false
			},
			{
				question: 'React is a library True or false?',
				options: [ 'True', 'False'],
				answer: 'True',
				answered: false
			}
		],
		currentQuestion: '',
		currentQuestionOptions: '',
		currentQuestionAnswer: '',
		iscurrentQuestionAnswer: '',
		count: 0,
		timer: 10
	};

	start = () => {
		let count = this.state.count;
		let question = this.state.questions[count];
		let currentQuestion = question.question;
		let currentQuestionOptions = question.options;
		let currentQuestionAnswer = question.answer;
		count++;
		this.setState({
			currentQuestion,
			currentQuestionOptions,
            currentQuestionAnswer,
            count
		});

		this.timer = setInterval(() => {
			const time = this.state.timer;
			if (time === 0) {
                console.log('newww timer')
                this.stopTimer();
                this.setState({
                    timer: 10
                })

                this.start();

                //redirect to next quizzz
			} else {
				this.setState({ timer: this.state.timer - 1 });
			}
		}, 1000);
    };
    
    next = () => {
        console.log('new timer')
        this.stopTimer();
        let count = this.state.count;
		let question = this.state.questions[count];
		let currentQuestion = question.question;
		let currentQuestionOptions = question.options;
		let currentQuestionAnswer = question.answer;
		count++;
		this.setState({
			currentQuestion,
			currentQuestionOptions,
            currentQuestionAnswer,
            count
        });
        
        this.timer = setInterval(() => {
			const time = this.state.timer;
			if (time === 0) {

                this.stopTimer();
                this.setState({
                    timer: 10
                })

                //redirect to next quizzz
			} else {
				this.setState({ timer: this.state.timer - 1 });
			}
		}, 1000);

    }

	stopTimer = () => {
		clearInterval(this.timer);
	};

	render() {
		return <Context.Provider value={{ ...this.state, start: this.start, next: this.next }}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
