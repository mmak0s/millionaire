import './App.css';
import React from 'react';

import Start from './components/start';
import Question from './components/question';
import Finish from './components/finish';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            component: "start",
            isLoaded: true,
            error: null,
            curQuestion: 0,

            win: [
                '$1,000,000',
                '$500,000',
                '$250,000',
                '$125,000',
                '$64,000',
                '$32,000',
                '$16,000',
                '$8,000',
                '$4,000',
                '$2,000',
                '$1,000',
                '$500'
            ],
            // win: [
            //     '$500',
            //     '$1,000',
            //     '$2,000',
            //     '$4,000',
            //     '$8,000',
            //     '$16,000',
            //     '$32,000',
            //     '$64,000',
            //     '$125,000',
            //     '$250,000',
            //     '$500,000',
            //     '$1,000,000',
            // ],
            questions: [
                {
                    question: "2 and 5",
                    answers: ["2", "5", "7", "1.2"],
                    correct: ["2", "5"]
                },
                {
                    question: "3+8",
                    answers: ["5", "3", "7", "11"],
                    correct: ["11"]
                },
                {
                    question: "5+1",
                    answers: ["6", "5", "7", "1.2"],
                    correct: ["6"]
                },
                {
                    question: "4+1",
                    answers: ["5", "8", "7", "1.2"],
                    correct: ["5"]
                },
                {
                    question: "22+1",
                    answers: ["23", "5", "7", "1.2"],
                    correct: ["23"]
                }
            ],
        };
    }


    handleChangeState = (next) => {
        this.setState({
            component: next
        });
    }

    handleStartQuiz = () => {
        this.setState({
            component: "question",
            curQuestion: 0
        });
    }

    handleAnswer = (state) => {
        if (state){
            if (this.state.curQuestion < this.state.questions.length-1){
                this.setState(prev => ({
                    curQuestion: prev.curQuestion + 1
                }))
            }else{
                console.log(0)
                this.setState({
                    component: 'finish'
                })
            }
        }else{
            this.setState({
                component: 'finish'
            })
        }
    }


    // HOW I'D MANAGE JSON

    // componentDidMount() {
    //     fetch("https://some.json")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                         isLoaded: true,
    //                         questions: result.questions,
    //                         win: result.prices
    //                     }
    //                 );
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error: error
    //                 });
    //             }
    //         )
    // }

    render() {
        const curWin = this.state.win[(this.state.win.length - 1) - this.state.curQuestion];
        const component = this.state.component;
        const error = this.state.error, isLoaded = this.state.isLoaded, questions = this.state.questions;
        if(error){
            return (<p>Error: {error.message}</p>)
        }else if(!isLoaded){
            return (<p>Loading...</p>)
        }else{
            if (component === "start"){
                return (
                    <div className="wrapper">
                        <Start
                            updateState={this.handleStartQuiz}
                        />
                    </div>

                );
            }else if(component === "question"){
                return (
                    <div className="wrapper">
                        <Question
                            handleAnswer={this.handleAnswer}
                            questions={this.state.questions}
                            curQuestion={this.state.curQuestion}
                            score={this.state.win}
                        />
                    </div>
                );
            }else{
                return (
                    <div className="wrapper">
                        <Finish
                            updateState={this.handleStartQuiz}
                            curWin={curWin}
                        />
                    </div>
                );
            }
        }
    }
}

export default App;
