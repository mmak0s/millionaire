import React from 'react';
import hand from '../assets/hand.png'
import StartButton from "./startButton";

const Finish = (props) => {
    return(
        <div className="game-edge">
            <div className="background game-edge__end-background"></div>
            <div className="game-edge__container">
                <img className="game-edge__image" src={hand} alt="Image"></img>
                <div className="game-edge__content game-edge__end-content">
                    <div className="subtitle game-edge__end-subtitle">
                        Total score:
                    </div>
                    <div className="title game-edge__title">
                        {props.curWin} earned
                    </div>
                    <StartButton
                        text={"Try again"}
                        updateState={props.updateState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Finish;