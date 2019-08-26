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
        console.log('start function')
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
                console.log('next quetion timer')
                this.stopTimer();  
                this.next();

                //redirect to next quizzz
			} else {
				this.setState({ timer: this.state.timer - 1 });
			}
		}, 1000);
    };
    
    next = () => {
        let count = this.state.count;
		let question = this.state.questions[count];
        if(!question){
            this.stopTimer();
            console.log('Game over')
        }else {
        this.stopTimer();
         this.start();
        }
    }

	stopTimer = () => {
        clearInterval(this.timer);
        this.setState({
            timer: 10
        })
	};

	render() {
		return <Context.Provider value={{ ...this.state, start: this.start, next: this.next }}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
