import React from "react";

export default class Score extends React.Component{
    render() {
        const score = this.props.score;
        const  classList = [];
        for (let i = 0; i < this.props.score.length; i++){
            if (i < this.props.curQuestion){
                classList[i] = "win--gained";
            }else if(i === this.props.curQuestion){
                classList[i] = "win--current";
            }else{
                classList[i] = "win--toGain";
            }
        }
        classList.reverse();
        return(
            <div className={"game__success" + this.props.popupClass}>
                <a onClick={this.props.closePopup()} className="game__success-slideOut" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.364 7.05025C18.7545 6.65972 18.7545 6.02656 18.364 5.63603C17.9734 5.24551 17.3403 5.24551 16.9497 5.63603L12 10.5858L7.05026 5.63606C6.65974 5.24554 6.02657 5.24554 5.63605 5.63606C5.24553 6.02659 5.24553 6.65975 5.63605 7.05028L10.5858 12L5.63603 16.9497C5.24551 17.3403 5.24551 17.9734 5.63603 18.364C6.02656 18.7545 6.65972 18.7545 7.05025 18.364L12 13.4142L16.9498 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9735 18.7545 17.3403 18.364 16.9498L13.4142 12L18.364 7.05025Z"
                            fill="#1C1C21"/>
                    </svg>
                </a>
                <div className="game__success-container">
                    {
                        score.map((score, index) => {
                            return (
                                <div key={index} className={"win " + classList[index]}>
                                    <div className="win__button">
                                        <span className="win__button-first"></span>
                                        <span className="win__button-inside">{score}</span>
                                        <span className="win__button-last"></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}