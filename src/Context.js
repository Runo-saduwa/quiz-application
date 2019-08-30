import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
	state = {
		questions: [
			{
				question: 'JavaScript was developed in what year?',
				options: [ '1995', '1960', '2019', '1985', '1991' ],
				answer: '1995'
			},
			{
				question: 'Ryan Dahl invented?',
				options: [ 'Python', 'Node.js', 'Vscode', 'React.js', 'Angular' ],
				answer: 'Node.js'
			
			},
			{
				question: 'The following are data types in JavaScript except?',
				options: [ 'null', 'undefined', 'NaN', 'Strings', 'Number'],
				answer: 'NaN'
			
			},
			{
			question: 'Examples of a boolean value',
				options: [ 'True', 'False', 'all of the above'],
				answer: 'all of the above'
			},
			{
				question: `the method pop() is used to?`,
				options: [ 'add a value to an array from the end', 'remove a value from an array from the end'],
				answer: 'remove a value from an array from the end'
			},
			{
				question: `name = ['tega', 'ejiro', 'tobi]`,
				options: [ 'name[0] === tega', 'name[0] === ejiro'],
				answer: 'name[0] === tega'
			},
			{
				question: 'Objest is a primitive data type',
				options: [ 'True', 'False'],
				answer: 'False'
			
			}
		],
		currentQuestion: '',
		currentQuestionOptions: '',
		currentQuestionAnswer: '',
		count: 0,
        timer: 10,
		score:0,
		option: '',
		isCorrect: false,
		hideStart: false,
		hideQuiz: true,
		hideRetake: true
	};


	handleChange = (e) => {
		this.setState({
		  option: e.target.value
		})
	};


	retake = () => {
      this.setState({
		  hideRetake: true,
		  hideQuiz: false,
		  score: 0
	  })
	  this.start()
	}


	start = () => {
        console.log('start function')
		let count = this.state.count;
		let question = this.state.questions[count];
		let currentQuestion = question.question;
		let currentQuestionOptions = question.options;
		let currentQuestionAnswer = question.answer;
		count++;
		this.setState({
			hideQuiz:false,
			hideStart:true,
			currentQuestion,
			currentQuestionOptions,
            currentQuestionAnswer,
            count
		});

	this.timer = setInterval(() => {
		let time = this.state.timer;
		if(time === 0){
			this.stopTimer();
			this.next();
		} else {
			this.setState({
				timer: time - 1
			})
		}
	}, 1000)

	};
	
	checkAnswer = () => {
		let score = this.state.score;
	    let userOption = this.state.option;
	   let currentQuestionAnswer = this.state.currentQuestionAnswer;
	   if(userOption === currentQuestionAnswer){
		   this.setState({
			   isCorrect: true,
			   score: score + 10
		   })
	   }else {
		   this.setState({
			   isCorrect: false
		   })
	   }
	}
    
    next = () => {
		
        let count = this.state.count;
		let question = this.state.questions[count];
        if(!question){
			this.checkAnswer();
			this.setState({
				hideQuiz: true,
				hideRetake: false,
				count: 0
			})
            console.log('Game over')
        } else {
			this.checkAnswer();
			this.start();
		}
	}
	
	continue = () => {
		let count = this.state.count;
		let question = this.state.questions[count];
        if(!question){
			this.checkAnswer()
            console.log('Game over')
        } else {
			this.checkAnswer();
			this.stopTimer();
			this.start();
		}
	}

	stopTimer = () => {
        clearInterval(this.timer);
        this.setState({
			isCorrect:false,
            timer: 10
        })
	};

	render() {
		return <Context.Provider value={{ ...this.state, start: this.start, next: this.next, cont: this.continue, handleChange: this.handleChange, retake: this.retake }}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
