import React from 'react';
import hand from '../assets/hand.png'
import StartButton from "./startButton";

const Start = (props) => {
    return(
        <div className="game-edge">
            <div className="background game-edge__start-background"> </div>
            <div className="game-edge__container">
                <img className="game-edge__image" src={hand} alt="Image"></img>
                <div className="game-edge__content">
                    <div className="subtitle">
                        Total score:
                    </div>
                    <div className="title game-edge__title">
                        Who wants to be<br /> a millionaire?
                    </div>
                    <StartButton
                        text={"Start"}
                        updateState={props.updateState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Start;