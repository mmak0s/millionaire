import React from 'react';
import Score from './score';
import Option from './option';

class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            classList: [],
            answers: [],
            answersFromProps: [],
            disableOptions: false,
            chosenAnsw: [],
            popupClass: ""
        }
    }

    handleAnswer = (answer, index) => {
        const question = this.props.questions[this.props.curQuestion];
        if (answer === question.correct.find(answ => answ === answer)){
            const newClassList = this.state.classList.concat();
            newClassList[index] = newClassList[index] + " option--correct";
            this.setState(state => {
                return {
                    classList: newClassList,
                }
            })

            this.state.chosenAnsw.push(answer);

            if (this.state.chosenAnsw.length === question.correct.length){
                this.state.disableOptions = true;
                    window.setTimeout(() => {
                    this.props.handleAnswer(true);
                    this.state.chosenAnsw = [];
                    this.setState(state => {
                        return {
                            classList: [],
                            disableOptions: false
                        }
                    })
                }, 2000);
            }
        }else{
            const oldClassList = this.state.classList.concat();
            const newClassList = this.state.classList.concat();
            const correctAnswIdx = this.state.answers.findIndex(el => el === question.answers[question.correct]);

            newClassList[index] = newClassList[index] + " option--wrong";
            for (let i = 0; i < question.correct.length; i++){
                console.log(question.correct[i]);
                const curIdx = this.state.answers.findIndex(el => el === question.correct[i]);
                newClassList[curIdx] = " option--correct";
            }
            this.setState(state => {
                return {
                    classList: newClassList,
                    disableOptions: true
                }
            })
            window.setTimeout(() => {
                this.props.handleAnswer(false);
                this.state.chosenAnsw = [];
                this.setState(state => {
                    return {
                        classList: oldClassList,
                        disableOptions: false
                    }
                })
            }, 2000);
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.answersFromProps !== props.questions[props.curQuestion].answers){
            const questionObject = {...props.questions[props.curQuestion]};
            const answers = questionObject.answers.slice().sort(() => {
                return Math.random() - 0.5;
            });
            return {
                answers: answers,
                answersFromProps: questionObject.answers
            }
        }
        return null;
    }

    closePopup = () => {
        this.setState({
            popupClass: ""
        })
    }
    openPopup = () => {
        this.setState({
            popupClass: " game__success--active"
        })
    }


    render(){
        return(
            <div className="game">
                <div className="game__background"></div>
                <div className="game__field">
                    <a onClick={() => this.openPopup()} className="game__field-mobileMenu" href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                                fill="#1C1C21"/>
                            <path
                                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                fill="#1C1C21"/>
                            <path
                                d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                                fill="#1C1C21"/>
                        </svg>
                    </a>

                    <div className="game__field-title">
                        {this.props.questions[this.props.curQuestion].question}
                    </div>
                    <div className="game__field-variants">
                        {
                            this.state.answers.map((answer, index) => {
                                return (
                                    <Option
                                        key={index}
                                        index={index}
                                        handleAnswer={this.handleAnswer}
                                        answer={answer}
                                        class={this.state.classList[index]}
                                        disableOptions={this.state.disableOptions}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <Score
                    score={this.props.score}
                    curQuestion={this.props.curQuestion}
                    popupClass={this.state.popupClass}
                    closePopup={() => this.closePopup}
                />
            </div>
        )
    }
}

export default Question;